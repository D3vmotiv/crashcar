import { useEffect } from "react";
import { AsyncStorage } from "react-native";

export default (
  storageItemName: string,
  storageItemValue: {
    content: any;
    isLoading: boolean;
  }
): void => {
  // Get data from async storage
  const setStorageData = async () => {
    if (storageItemValue.content != null && !storageItemValue.isLoading) {
      const strigifyJSON: string = JSON.stringify(storageItemValue.content);
      console.log(strigifyJSON);
      await AsyncStorage.setItem(storageItemName, strigifyJSON);
    }
  };

  // Run asynchronous
  useEffect(() => {
    return () => {
      setStorageData()
        .then(() => {})
        .catch(() => {
          console.log("error");
        });
    };
  }, [storageItemValue]);
};
