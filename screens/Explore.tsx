import React, { useContext, useState } from "react";
import { Button, Text, View } from "react-native";
import { AppStorage } from "../routesAndProviders/APIprovider";

interface ExploreProps {}

const Explore: React.FC<ExploreProps> = () => {
  const { handleDataApi } = useContext(AppStorage);

  const [rendererAccidentsCounter, setRendererAccidentsCounter] = useState<
    number
  >(0);

  const [rendererAccidents, setRendererAccidents] = useState<
    Record<string, string | null>[]
  >([{}]);

  const showMoreAccidents = () => {
    const accidentsToCheck:
      | Record<string, string | null>[]
      | undefined = handleDataApi.accidents?.slice(
      rendererAccidentsCounter,
      rendererAccidentsCounter + 10
    );

    accidentsToCheck?.forEach((accident) => {
      if (accident != null) {
        setRendererAccidents((prev) => {
          return [...prev, accident];
        });
        setRendererAccidentsCounter((c) => c + 1);
      }
    });
  };

  return (
    <View>
      <Text>Wypadki/utrudnienia drogowe:</Text>
      <View>
        {rendererAccidents.map((accident, i) => {
          return (
            <Text key={i}>
              <i>
                <b>DATA: </b>
              </i>
              {accident.data_powstania} <b>Nr drogi:</b> {accident.nr_drogi},{" "}
              <b>województwo:</b> {accident.woj},<b>na odcinku:</b>{" "}
              {accident.nazwa_odcinka}. <b>Informacje/objazd: </b>
              {accident.objazd}{" "}
            </Text>
          );
        })}
      </View>
      <Button
        color={"lightblue"}
        title="Show more accidents"
        onPress={showMoreAccidents}
      />
    </View>
  );
};

export default Explore;
