import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { Switch } from "../components/";

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
  const wojewodztwa_all = Object.values(wojewodztwa);
  const drogi_all = Object.values(glowne_drogi);

  return (
    <View>
      <Text>Filtry:</Text>
      <Text>Wyczyść wszystko: </Text>
      <Button
        color={"lightblue"}
        title={"Clear all"}
        onPress={() => console.log("XD")}
      />
      <Text style={{ marginTop: 16 }}>
        Wybierz, z których województw chcesz widzieć informacje:{" "}
      </Text>
      <ScrollView horizontal={true}>
        <Switch activeColor={"lightblue"} initialState={true}>
          Wszystkie
        </Switch>
        {wojewodztwa_all.map((e) => {
          return (
            <Switch activeColor={"lightblue"} initialState={true}>
              {e}
            </Switch>
          );
        })}
      </ScrollView>
      <Text style={{ marginTop: 16 }}>
        Czy chcesz widzieć informacje tylko o zamkniętych drogach?{" "}
      </Text>
      <Switch activeColor={"lightblue"}>Tak</Switch>
      <Text style={{ marginTop: 16 }}>
        Wybierz, z których dróg chcesz widzieć informacje:{" "}
      </Text>
      <ScrollView horizontal={true}>
        <Switch activeColor={"lightblue"} initialState={true}>
          Wszystkie
        </Switch>
        {drogi_all.map((e) => {
          return (
            <Switch activeColor={"lightblue"} initialState={true}>
              {e}
            </Switch>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Preferences;
