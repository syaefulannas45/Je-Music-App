import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {ICLogo} from '../../assets';
import {TextCS} from '../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../router';

type SplashScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'splash'
>;

const Splash = ({navigation}: SplashScreenNavigationProp) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('getstarted');
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-background-100">
      <View>
        <Image source={ICLogo} />
        <TextCS className="font-700 text-3xl text-text-400 text-center mt-5">
          Je Music
        </TextCS>
      </View>
    </View>
  );
};

export default Splash;
