import {View} from 'react-native';
import React from 'react';
import {TextCS} from '../../atoms';

interface ListProps {
  title?: string;
  type?: 'Music';
  className?: string;
  icon?: React.ReactNode;
}
const List = ({title, type, className, icon}: ListProps) => {
  switch (type) {
    case 'Music':
      return (
        <View
          className={`rounded-lg bg-highlight-100 ${className} w-[170] h-[130px] mr-2 flex flex-row px-2`}>
          <View>
            <TextCS className="text-white text-[24px] font-bold">
              {title}
            </TextCS>
          </View>
          <View className="justify-end">{icon}</View>
        </View>
      );
  }
};

export default List;
