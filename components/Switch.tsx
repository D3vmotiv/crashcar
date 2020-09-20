import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Text,
} from "react-native";

interface SwitchProps {
  width?: number;
  height?: number;
  activeColor: string;
  textColor?: string;
  textSize?: number;
  borderColor?: string;
  initialState?: boolean;
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
  initialState,
  children,
}) => {
  const handleOnPress = () => {
    setIsActive((prev) => !prev);
  };

  const [isActive, setIsActive] = useState<boolean>(
    initialState ? initialState : false
  );

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
