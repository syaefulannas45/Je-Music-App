import {View} from 'react-native';
import React from 'react';
import {TabItems} from '../../atoms';

const BottomNavigator = ({state, descriptors, navigation}: any) => {
  return (
    <View className="flex-row justify-between px-[25px] py-[13px] bg-background-100">
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItems
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;
