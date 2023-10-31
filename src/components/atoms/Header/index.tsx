import {Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import TextCS from '../TextCS';
import {ICBack, ICBar, ICProfile, ICSongs} from '../../../assets';

interface HeaderProps {
  title?: string;
  desc?: string;
  type?: 'withPhoto' | 'playMusic';
  onPress?: () => void;
}
const Header = ({title, desc, type}: HeaderProps) => {
  if (type === 'playMusic')
    return (
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity>
          <ICBack />
        </TouchableOpacity>
        <View>
          <TextCS className="text-[24px] font-600 text-text-500">
            Play Music
          </TextCS>
        </View>
        <TouchableOpacity>
          <ICBar />
        </TouchableOpacity>
      </View>
    );
  if (type === 'withPhoto')
    return (
      <View className="flex flex-row space-x-4 items-center">
        <Image source={ICProfile} className="w-[60px] h-[60px] rounded-full" />
        <View>
          <TextCS className="text-[16px] font-bold text-text-500">
            {title}
          </TextCS>
          <TextCS className="text-[14px] text-text-600">{desc}</TextCS>
        </View>
      </View>
    );
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
