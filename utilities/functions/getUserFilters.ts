import { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { filters, userFilters } from "../constants/interfaces";

const emptyFilters = {
  droga_zamknieta: [],
  nr_drogi: [],
  typ: [],
  woj: [],
};

export default (storageItemName: string): userFilters => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userFilters, setUserFilters] = useState<filters>(emptyFilters);

  // Get data from async storage
  const getStorageData = async () => {
    const filtersFromStorage: string | null = await AsyncStorage.getItem(
      storageItemName
    );
    if (filtersFromStorage != null) {
      const filtersObject: filters = JSON.parse(filtersFromStorage);
      setUserFilters(filtersObject);
    }
  };

  // Run asynchronous
  useEffect(() => {
    if (isLoading) {
      getStorageData()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          console.log("catch");
          setIsLoading(false);
        });
    }
  }, [storageItemName]);

  return {
    isLoading: isLoading,
    content: userFilters,
  };
};
