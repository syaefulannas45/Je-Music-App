import {Text, TextStyle} from 'react-native';
import React from 'react';

interface TextProps {
  className?: string;
  children?: React.ReactNode;
  style?: TextStyle;
}
const TextCS = ({className, children, style}: TextProps) => {
  return (
    <Text style={style} className={`font-400 ${className}`}>
      {children}
    </Text>
  );
};

export default TextCS;
