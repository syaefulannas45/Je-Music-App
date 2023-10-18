import React from 'react';
import {ButtonCS, Gap, Input, TextCS} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Image, TouchableOpacity, View} from 'react-native';
import {ICAddPhoto, ICName, ICProfile, ICUsername} from '../../assets';


const CustomizeProfileScreen = () => {
  return (
    <LinearGradient
      className="flex-1 px-4 pt-16"
      colors={['#4C2A6A', '#161B33']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}>
      <TextCS className="font-700 text-white text-[36px] text-center">
        Let's Customize Your Journey
      </TextCS>
      <Gap className="h-[25px]" />
      <View className="flex items-center">
        <View className="flex justify-center items-center w-[160px] h-[160px] border-2 border-border-400 rounded-full relative">
          <Image source={ICProfile} className="w-[150px] h-[150px]" />
          <TouchableOpacity className="absolute bottom-0 right-0">
            <Image source={ICAddPhoto} className="w-[50px] h-[50px] " />
          </TouchableOpacity>
        </View>
      </View>
      <Gap className="h-[45px]" />
      <Input placeholder="Masukkan Nama Anda" logo={<ICName />} />
      <Gap className="h-[25px]" />
      <Input placeholder="Masukkan Username Anda" logo={<ICUsername />} />
      <Gap className="h-[20px]" />
      <TextCS className="font-600 text-white text-[20px]">
        Pilih Genre Music
      </TextCS>
      <Gap className="h-[20px]" />
      <View className="flex flex-row space-x-[12px] flex-wrap">
        <View className="max-w-[160px] border-2 border-white py-1 rounded-full px-[40px] mb-4">
          <TextCS className="text-white text-[15px] text-center">Pop</TextCS>
        </View>
        <View className="max-w-[160px]  py-1 rounded-full px-[40px] mb-4 bg-highlight-100">
          <TextCS className="text-white text-[15px] text-center">
            Hip-Hop
          </TextCS>
        </View>
        <View className="max-w-[160px]  py-1 rounded-full px-[40px] mb-4 bg-highlight-100">
          <TextCS className="text-white text-[15px] text-center">
            Hip-Hop
          </TextCS>
        </View>
        <View className="max-w-[160px] border-2 border-white py-1 rounded-full px-[40px] mb-4">
          <TextCS className="text-white text-[15px] text-center">Pop</TextCS>
        </View>
      </View>
      <Gap className="h-[20px]" />
      <ButtonCS>Save Profile</ButtonCS>
    </LinearGradient>
  );
};

export default CustomizeProfileScreen;
