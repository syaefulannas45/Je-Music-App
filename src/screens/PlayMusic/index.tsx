import React, {useEffect} from 'react';
import {RootStackParamList} from '../../router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {Gap, Header, TextCS} from '../../components';
import {Image, TouchableOpacity, View} from 'react-native';
import {ICLove, ICNext, ICPlay, ICPrev, ICShuffle, ICSync} from '../../assets';
import TrackPlayer from 'react-native-track-player';

type PlayMusicScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'playmusic'
>;
interface PlayMusicParams {
  artist: string;
  image: string;
  song: string;
  songTitle: string;
}
const PlayMusicScreen = ({route}: PlayMusicScreenNavigationProp) => {
  const {artist, image, song, songTitle} = route.params as PlayMusicParams;
  useEffect(() => {
    const startPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
          url: song,
          title: songTitle,
          artist: artist,
          artwork: image,
          duration: 214,
        });
      } catch (error) {
        console.log(error);
      }
    };
    startPlayer();
  }, []);
  const playMusic = async () => {
    try {
      await TrackPlayer.play();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LinearGradient
      className="flex-1 px-4 pt-10"
      colors={['#4C2A6A', '#161B33']}
      start={{x: 0.5, y: 1}}
      end={{x: 0.5, y: 0}}>
      <Header type="playMusic" />
      <Gap className="h-[90px]" />
      <View className="items-center">
        <Image source={{uri: image}} className="w-[370px] h-[290px]" />
      </View>
      <View className="flex flex-row justify-between mt-[25px]">
        <View>
          <TextCS className="text-[36px] font-600 text-white">{artist}</TextCS>
          <TextCS className="text-text-300 text-[20px]">{songTitle}</TextCS>
        </View>
        <View>
          <ICLove />
        </View>
      </View>
      <View className="mt-[20px]">
        <View className="w-full h-[15px] bg-text-500 rounded-full" />
        <View className="mt-4 flex flex-row justify-between">
          <TextCS className="text-text-300">1.26</TextCS>
          <TextCS className="text-text-300">4.26</TextCS>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center mt-[80px]">
        <ICShuffle />
        <View className="flex flex-row justify-between items-center space-x-5">
          <ICPrev />
          <TouchableOpacity
            className="rounded-full bg-highlight-100 p-[10px]"
            onPress={playMusic}>
            <ICPlay />
          </TouchableOpacity>
          <ICNext />
        </View>
        <ICSync />
      </View>
    </LinearGradient>
  );
};
export default PlayMusicScreen;
