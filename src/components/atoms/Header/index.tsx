import {Image, View} from 'react-native';
import React from 'react';
import TextCS from '../TextCS';
import {ICSongs} from '../../../assets';

interface HeaderProps {
  title?: string;
  desc?: string;
}
const Header = ({title, desc}: HeaderProps) => {
  return (
    <View className="relative">
      <Image source={ICSongs} className="absolute right-2 top-[-30px]" />
      <TextCS className="font-700 text-text-100 text-[36px] w-[90%]">
        {title}
      </TextCS>
      <TextCS className="w-[90%] text-text-100 text-[15px]">{desc}</TextCS>
    </View>
  );
};

export default Header;
