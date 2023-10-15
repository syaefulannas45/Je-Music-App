import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean
  bgStyle?: string;
  textStyle?: string;
  onPress?: any;
}
const ButtonCS = ({
  bgStyle,
  textStyle,
  onPress,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-highlight-300 w-full flex justify-center items-center rounded-full py-2 ${bgStyle}`}
      disabled={disabled}
      onPress={onPress}>
      <Text className={`text-text-100 font-700 text-[32px] ${textStyle}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCS;
