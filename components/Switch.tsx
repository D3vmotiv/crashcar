import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Text,
} from "react-native";
import { filters } from "../utilities/constants/interfaces";
import { setUserFilters } from "../utilities/functions";

// Filters
type singleFilter = keyof filters;

interface SwitchProps {
  width?: number;
  height?: number;
  activeColor: string;
  textColor?: string;
  textSize?: number;
  borderColor?: string;
  arrayName: singleFilter;
  arrayToChange: string[];
  valueToChange: string;
  methodToChangeVal: (filter: singleFilter, val: string[]) => void;
}

interface Style {
  touchable: ViewStyle;
}

const Switch: React.FC<SwitchProps> = ({
  width,
  height,
  activeColor,
  textColor,
  textSize,
  borderColor,
  arrayName,
  arrayToChange,
  valueToChange,
  methodToChangeVal,
  children,
}) => {
  let arrayCopy = arrayToChange;

  useEffect(() => {
    changeState();
  }, [arrayToChange]);

  const changeState = () => {
    if (arrayToChange.includes(valueToChange)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const [isActive, setIsActive] = useState<boolean>(
    arrayToChange.includes(valueToChange) ? true : false
  );

  const handleOnPress = (): void => {
    if (isActive) {
      if (arrayToChange.includes(valueToChange)) {
        arrayCopy = arrayCopy.filter((e) => e != valueToChange);
      }
    } else {
      if (!arrayToChange.includes(valueToChange)) {
        arrayCopy.push(valueToChange);
      }
    }
    changeState();
    methodToChangeVal(arrayName, arrayCopy);
  };

  return (
    <View
      style={{
        minWidth: width ? width : 144,
        height: height ? height : 46,
        paddingLeft: isActive ? 8 : 16,
        paddingRight: isActive ? 8 : 16,
        margin: 5,
        borderRadius: 2,
        borderWidth: !isActive ? 2 : 0,
        borderColor: !isActive
          ? borderColor
            ? borderColor
            : "#777"
          : "transparent",
      }}
    >
      <TouchableOpacity style={preStyles.touchable} onPress={handleOnPress}>
        <View
          style={{
            backgroundColor: isActive ? activeColor : "transparent",
            width: "100%",
            height: "100%",
            borderRadius: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: textSize ? textSize : 16,
              padding: 4,
              color: isActive ? (textColor ? textColor : "#fff") : "#777",
            }}
          >
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const preStyles = StyleSheet.create<Style>({
  touchable: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Switch;
