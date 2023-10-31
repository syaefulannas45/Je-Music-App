import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, Gap, Header, List, TextCS} from '../../components';
import {ICPop, ICRock} from '../../assets';
import {get, ref} from 'firebase/database';
import {db} from '../../config';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router';

interface SongsLocalState {
  songTitle: string;
  artist: string;
  image: string;
}
type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;
const HomeScreen = ({navigation}: HomeScreenNavigationProp) => {
  const [songsLocal, setSongsLocal] = useState<SongsLocalState[]>([]);
  useEffect(() => {
    getTopLocalSongs();
  }, []);
  const getTopLocalSongs = async () => {
    try {
      const songsRef = ref(db, 'songs');
      const snapshot = await get(songsRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (Array.isArray(data)) {
          const filteredData = data.filter(item => item !== null);
          setSongsLocal(filteredData);
        }
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <View className="flex-1 bg-background-200  pt-[40px] px-[10px]">
      <Header
        type="withPhoto"
        title="Welcome, Syaeful Annas !"
        desc="Where words fail, music speaks."
      />
      <View>
        <Gap className="h-[55px]" />
        <TextCS className="text-[24px] font-600 text-text-400">Category</TextCS>
        <Gap className="h-[20px]" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row">
            <List type="Music" title="Pop" icon={<ICPop />} />
            <List
              type="Music"
              title="Rock"
              className="bg-highlight-300"
              icon={<ICRock />}
            />
            <List type="Music" title="Jazz" className="bg-highlight-200" />
          </View>
        </ScrollView>
      </View>

      <View>
        <Gap className="h-[50px]" />
        <TextCS className="text-[24px] font-600 text-text-400">
          Top Songs Local
        </TextCS>
        <Gap className="h-[10px]" />
        <View className="flex flex-row">
          {songsLocal.map((item, index) => (
            <Card
              key={index}
              artist={item.artist}
              nameSong={item.songTitle}
              uriPhoto={item.image}
              onPress={() => navigation.navigate('playmusic', item)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
