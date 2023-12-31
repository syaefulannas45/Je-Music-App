import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextCS} from '../../atoms';

interface CardProps {
  artist?: string;
  nameSong?: string;
  uriPhoto?: string;
  onPress?: () => void;
}
const Card = ({artist, nameSong, uriPhoto, onPress}: CardProps) => {
  return (
    <TouchableOpacity
      className="bg-background-100 items-center w-[190px] h-[260px] py-4 rounded-xl mr-4"
      onPress={onPress}>
      <Image source={{uri: uriPhoto}} className="h-[150px] w-[150px]" />
      <TextCS className="text-white text-[20px] font-600 mt-[15px]">
        {nameSong}
      </TextCS>
      <TextCS className="text-[14px] text-text-600">{artist}</TextCS>
    </TouchableOpacity>
  );
};

export default Card;
