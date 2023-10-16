import {TextInput, View} from 'react-native';
import React from 'react';

interface InputProps {
  logo?: React.ReactNode;
  onChangeText?: (e: string) => void;
  placeholder?: string;
}
const Input = ({onChangeText, logo, placeholder, ...rest}: InputProps) => {
  return (
    <View className="w-full relative">
      <View className="absolute z-10 top-[17px] left-[20px]">{logo}</View>
      <TextInput
        className="w-full bg-input-100 rounded-full py-4 pl-16 pr-4 placeholder:text-[17px] text-input-200 border-2 border-border-200"
        placeholder={placeholder}
        placeholderTextColor={'#6A6A6A'}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default Input;
