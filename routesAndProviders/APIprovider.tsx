import React, { createContext, useEffect, useState } from "react";
import {
  xmlObject,
  userFilters,
  apiData,
  filters,
} from "../utilities/constants/interfaces";
import {
  getApiData,
  getUserFilters,
  getObjectFromXML,
} from "../utilities/functions";

interface APIproviderProps {}

// Filters
type singleFilter = keyof filters;

const empyUserFiltersContent: filters = {
  typ: [],
  nr_drogi: [],
  woj: [],
  droga_zamknieta: [],
};

// Storage information about apiData, user's preferences filters and state of loading
export const AppStorage = createContext<{
  handleDataApi: xmlObject;
  handleUserFilters: userFilters;
  isAppLoading: boolean;
  changeFilter: (filter: singleFilter, val: string[]) => void;
}>({
  handleDataApi: {
    isLoading: true,
    lastUpdate: null,
    accidents: undefined,
  },
  handleUserFilters: {
    isLoading: true,
    content: empyUserFiltersContent,
  },
  isAppLoading: true,
  changeFilter: (filter: singleFilter, val: string[]) => {},
});

export const APIprovider: React.FC<APIproviderProps> = ({ children }) => {
  // Main loading - all packages
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

  // Empty init states
  const [handleDataApi, setDataApi] = useState<xmlObject>({
    isLoading: true,
    lastUpdate: null,
    accidents: undefined,
  });
  const [handleUserFilters, setHandleUserFilters] = useState<userFilters>({
    isLoading: true,
    content: empyUserFiltersContent,
  });

  // ----------------------------------------
  // API part
  // Loading data part has 3 steps:
  // - take raw data from endpoint.
  // - convert this raw data into js object from xml object.
  // - assign end result to variable.
  const rawDataFromApi: apiData = getApiData(
    "https://www.gddkia.gov.pl/dane/zima_html/utrdane.xml"
  );

  // ----------------------------------------
  // User filters part
  // Load them from async storage
  const filtersFromStorage = getUserFilters("FILTERS");

  const loadAllAppData = async () => {
    if (isAppLoading) {
      if (!rawDataFromApi.isLoading) {
        // 2st step of API part
        if (!rawDataFromApi.error) {
          const domParser = new DOMParser();

          const xmlDataFromApi: Document = domParser.parseFromString(
            rawDataFromApi.content,
            "text/xml"
          );

          // 3rd step of API part
          setDataApi(getObjectFromXML(xmlDataFromApi));
        } else {
          console.log(rawDataFromApi.error);
        }
      }

      // All data loaded
      if (
        !handleDataApi.isLoading &&
        !rawDataFromApi.isLoading &&
        !filtersFromStorage.isLoading
      ) {
        if (!filtersFromStorage.isLoading) {
          setHandleUserFilters(filtersFromStorage);
        }
        setIsAppLoading(false);
      }
    }
  };

  // Function to change filters
  const changeFilter = (filter: singleFilter, val: string[]) => {
    setHandleUserFilters(
      (prev): userFilters => {
        return {
          content: {
            ...prev.content,
            [filter]: val,
          },
          isLoading: prev.isLoading,
        };
      }
    );
  };

  // Load all data
  useEffect(() => {
    loadAllAppData();
  });

  return (
    <AppStorage.Provider
      value={{
        handleDataApi,
        handleUserFilters,
        isAppLoading,
        changeFilter,
      }}
    >
      {children}
    </AppStorage.Provider>
  );
};
