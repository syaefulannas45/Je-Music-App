import {Text} from 'react-native';
import React from 'react';

interface TextProps {
  className?: string;
  children?: React.ReactNode;
}
const TextCS = ({className, children}: TextProps) => {
  return <Text className={`${className} font-400`}>{children}</Text>;
};

export default TextCS;
