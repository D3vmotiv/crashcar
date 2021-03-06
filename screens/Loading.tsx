import React from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface LoadingProps {}

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 25,
    fontSize: 18,
  },
});

export default Loading;
