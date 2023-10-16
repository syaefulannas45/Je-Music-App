import {View} from 'react-native';
import React from 'react';

interface GapProps {
  className?: string;
}
const Gap = ({className}: GapProps) => {
  return <View className={className} />;
};

export default Gap;
