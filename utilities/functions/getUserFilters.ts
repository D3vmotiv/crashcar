import { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { filters, userFilters } from "../constants/interfaces";

const emptyFilters = {
  droga_zamknieta: null,
  nr_drogi: null,
  typ: null,
  woj: null,
};

export default (storageItemName: string): userFilters => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let userFilters: filters = emptyFilters;

  // Get data from async storage
  const getStorageData = async () => {
    const filtersFromStorage: string | null = await AsyncStorage.getItem(
      storageItemName
    );
    if (filtersFromStorage != null) {
      const filtersObject: filters = JSON.parse(filtersFromStorage);
      userFilters = filtersObject;
    }
  };

  // Run asynchronous
  useEffect(() => {
    getStorageData()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        userFilters = emptyFilters;
        setIsLoading(false);
      });
  });

  return {
    isLoading: isLoading,
    content: userFilters,
  };
};
