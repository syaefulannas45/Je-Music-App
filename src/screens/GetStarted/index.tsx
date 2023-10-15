import {TouchableOpacity} from 'react-native';
import React from 'react';
import {GSComponent, TextCS} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {GetStartedScreenNavigationProp} from '../../components/molecules/GSComponent';

const GetStarted = ({navigation, route}: GetStartedScreenNavigationProp) => {
  return (
    <LinearGradient
      colors={['#161B33', '#4C2A6A']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      className="w-full h-screen flex-1">
      <TouchableOpacity className="bg-highlight-400 w-[20%] flex items-center  rounded-full mx-4 my-4 py-1">
        <TextCS className="text-text-300">Skip</TextCS>
      </TouchableOpacity>
      <GSComponent navigation={navigation} route={route} />
    </LinearGradient>
  );
};

export default GetStarted;
