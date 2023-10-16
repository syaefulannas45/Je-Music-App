import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ICGetStarted1, ICGetStarted2, ICGetStarted3} from '../../../assets';
import {ButtonCS, TextCS} from '../../atoms';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../router';

export type GetStartedScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'getstarted'
>;
const GSComponent = ({navigation}: GetStartedScreenNavigationProp) => {
  const dataGetStarted: object[] = [
    {
      id: 1,
      title: 'Explore Your Sound',
      photo: ICGetStarted1,
      desc: 'Let your musical journey begin by exploring a world of diverse melodies and rhythms. Slide through our interactive guide to unlock a universe of musical experiences.',
    },
    {
      id: 2,
      title: 'Unveil the Beat',
      photo: ICGetStarted2,
      desc: 'Unveil the rhythm that resonates with your soul. Swipe through the introduction to dive into a world of beats and tunes, where every note tells a story.',
    },
    {
      id: 3,
      title: 'Tune into Harmony',
      photo: ICGetStarted3,
      desc: 'Find your harmony and immerse yourself in the symphony of sounds. Slide through our introductory experience to tune into a world where music becomes your language.',
    },
  ];
  const [disabled, setDisabled] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isLastSlide: boolean = currentIndex === dataGetStarted.length - 1;
  useEffect(() => {
    if (isLastSlide) {
      setDisabled(false);
    }
  }, [isLastSlide]);
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <View className="items-center justify-betwee flex-1">
      <View className="h-[80%]">
        <SwiperFlatList
          index={0}
          showPagination
          paginationStyleItem={{width: 20, height: 20}}
          paginationStyleItemActive={{backgroundColor: '#D9D9D9'}}
          paginationStyleItemInactive={{backgroundColor: '#738678'}}
          data={dataGetStarted}
          renderItem={({item}) => {
            return (
              <View style={styles.slide}>
                <Image source={item.photo} style={styles.image} />
                <TextCS style={styles.title}>{item.title}</TextCS>
                <TextCS style={styles.description}>{item.desc}</TextCS>
              </View>
            );
          }}
          onChangeIndex={({index}) => handleIndexChange(index)}
        />
      </View>
      <View className="flex-1 w-full items-center justify-center p-4">
        <ButtonCS
          bgStyle={`${isLastSlide ? 'opactiy-100' : 'opacity-50'}`}
          disabled={disabled}
          onPress={() => navigation.replace('register')}>
          Get Started
        </ButtonCS>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  image: {
    height: 350,
    width: 350,
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    color: '#4ECDC4',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    color: '#ffffff',
    textAlign: 'center',
    marginHorizontal: 20,
    width: 320,
  },
});
export default GSComponent;
