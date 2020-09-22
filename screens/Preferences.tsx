import React, { useContext, useEffect } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { Switch } from "../components/";
import { AppStorage } from "../routesAndProviders/APIprovider";
import { setUserFilters } from "../utilities/functions";

interface PreferencesProps {}

enum wojewodztwa {
  dolnoslaskie = "dolnośląskie",
  kujawskopomorskie = "kujawsko-pomorskie",
  lubelskie = "lubelskie",
  lubuskie = "lubuskie",
  lodzkie = "łódzkie",
  malopolskie = "małopolskie",
  mazowieckie = "mazowieckie",
  opolskie = "opolskie",
  podkarpackie = "podkarpackie",
  podlaskie = "podlaskie",
  pomorskie = "pomorskie",
  slaskie = "śląskie",
  swietokrzyskie = "świętokrzyskie",
  warminskomazurskie = "warmińsko-mazurskie",
  wielkopolskie = "wielkopolskie",
  zachodniopomorskie = "zachodniopomorskie",
}

enum glowne_drogi {
  a1 = "A1",
  a2 = "A2",
  a4 = "A4",
  res = "Pozostałe",
}

const Preferences: React.FC<PreferencesProps> = () => {
  const wojewodztwa_all = Object.keys(wojewodztwa);
  const drogi_all = Object.keys(glowne_drogi);
  const { handleUserFilters, changeFilter } = useContext(AppStorage);

  setUserFilters("FILTERS", handleUserFilters);

  // useEffect(() => {
  //   console.log("DX");
  //   return () => {
  //     console.log("XD");
  //     setUserFilters("FILTERS", handleUserFilters);
  //   };
  // }, [handleUserFilters]);

  return (
    <View>
      <Text>Filtry:</Text>
      <Text>Zaznacz wszystko: </Text>
      <Button
        color={"lightblue"}
        title={"Clear all"}
        onPress={() => console.log("XD")}
      />
      <Text style={{ marginTop: 16 }}>
        Wybierz, z których województw chcesz widzieć informacje:{" "}
      </Text>
      <ScrollView horizontal={true}>
        {/* <Switch activeColor={"lightblue"}>Wszystkie</Switch> */}
        {wojewodztwa_all.map((e, i) => {
          return (
            <Switch
              key={i}
              activeColor={"lightblue"}
              arrayName={"woj"}
              arrayToChange={handleUserFilters.content.woj}
              valueToChange={e}
              methodToChangeVal={changeFilter}
            >
              {e}
            </Switch>
          );
        })}
      </ScrollView>
      <Text style={{ marginTop: 16 }}>
        Czy chcesz widzieć informacje tylko o zamkniętych drogach?{" "}
      </Text>
      <Switch
        activeColor={"lightblue"}
        arrayName={"droga_zamknieta"}
        arrayToChange={handleUserFilters.content.droga_zamknieta}
        valueToChange={"droga_zamknieta"}
        methodToChangeVal={changeFilter}
      >
        Tak
      </Switch>
      <Text style={{ marginTop: 16 }}>
        Wybierz, z których dróg chcesz widzieć informacje:{" "}
      </Text>
      <ScrollView horizontal={true}>
        {/* <Switch activeColor={"lightblue"}>Wszystkie</Switch> */}
        {drogi_all.map((e, i) => {
          return (
            <Switch
              key={i}
              activeColor={"lightblue"}
              arrayName={"nr_drogi"}
              arrayToChange={handleUserFilters.content.nr_drogi}
              valueToChange={e}
              methodToChangeVal={changeFilter}
            >
              {e}
            </Switch>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Preferences;
