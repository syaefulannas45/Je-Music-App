import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface LinkProps {
  onPress?: () => void;
  title?: string;
  className?: string;
}
const Link = ({onPress, title, className}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className={`${className}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;
