import React, {useState} from 'react';
import {ButtonCS, Gap, Input, TextCS} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Image, TouchableOpacity, View} from 'react-native';
import {ICAddPhoto, ICName, ICProfile, ICUsername} from '../../assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router';

interface saveProfileState {
  name: string;
  username: string;
  genre: string[];
}
type SplashScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'customizeprofile'
>;
const CustomizeProfileScreen = ({navigation}: SplashScreenNavigationProp) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [saveProfile, setSaveProfile] = useState<saveProfileState>({
    name: '',
    username: '',
    genre: [],
  });
  const handleGenreSelection = (genre: string) => {
    const selectedGenres = saveProfile.genre;
    if (selectedGenres.includes(genre)) {
      setSaveProfile({
        ...saveProfile,
        genre: selectedGenres.filter(item => item !== genre),
      });
      setSelected(!selected);
    } else {
      setSaveProfile({
        ...saveProfile,
        genre: [...selectedGenres, genre],
      });
      setSelected(!selected);
    }
  };
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
      <View className="flex flex-row flex-wrap">
        <TouchableOpacity
          className={`max-w-[160px]  py-1 rounded-full px-[40px] mb-4 mr-2 ${
            saveProfile.genre.includes('Pop')
              ? 'bg-highlight-100 border-none'
              : 'border-2 border-white'
          }`}
          onPress={() => handleGenreSelection('Pop')}>
          <TextCS className="text-white text-[15px] text-center">Pop</TextCS>
        </TouchableOpacity>
        <TouchableOpacity
          className={`max-w-[160px]  py-1 rounded-full px-[40px] mb-4 mr-2 ${
            saveProfile.genre.includes('Hip-Hop')
              ? 'bg-highlight-100 border-none'
              : 'border-2 border-white'
          }`}
          onPress={() => handleGenreSelection('Hip-Hop')}>
          <TextCS className="text-white text-[15px] text-center">
            Hip-Hop
          </TextCS>
        </TouchableOpacity>
        <TouchableOpacity
          className={`max-w-[160px]  py-1 rounded-full px-[40px] mb-4 mr-2 ${
            saveProfile.genre.includes('Rock')
              ? 'bg-highlight-100 border-none'
              : 'border-2 border-white'
          }`}
          onPress={() => handleGenreSelection('Rock')}>
          <TextCS className="text-white text-[15px] text-center">Rock</TextCS>
        </TouchableOpacity>
        <TouchableOpacity
          className={`max-w-[160px]  py-1 rounded-full px-[40px] mb-4 mr-2 ${
            saveProfile.genre.includes('Jazz')
              ? 'bg-highlight-100 border-none'
              : 'border-2 border-white'
          }`}
          onPress={() => handleGenreSelection('Jazz')}>
          <TextCS className="text-white text-[15px] text-center">Jazz</TextCS>
        </TouchableOpacity>
      </View>
      <Gap className="h-[20px]" />
      <ButtonCS textStyle="text-[23px]">Save Profile</ButtonCS>
    </LinearGradient>
  );
};

export default CustomizeProfileScreen;
