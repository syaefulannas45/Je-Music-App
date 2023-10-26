import {TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ICHomeActive,
  ICHomeNonActive,
  ICNotificationActive,
  ICNotificationNonActive,
  ICSearchActive,
  ICSearchNonActive,
  ICSettingActive,
  ICSettingNonActive,
} from '../../../assets';

interface TabItemsProps {
  title?: string;
  active?: boolean;
  onPress?: () => void;
  onLongPress?: any;
}
const TabItems = ({title, active, onLongPress, onPress}: TabItemsProps) => {
  const getIcon = () => {
    switch (title) {
      case 'home':
        return active ? <ICHomeActive /> : <ICHomeNonActive />;
      case 'search':
        return active ? <ICSearchActive /> : <ICSearchNonActive />;
      case 'notification':
        return active ? <ICNotificationActive /> : <ICNotificationNonActive />;
      case 'setting':
        return active ? <ICSettingActive /> : <ICSettingNonActive />;
    }
  };
  return (
    <TouchableOpacity
      className="items-center"
      onPress={onPress}
      onLongPress={onLongPress}>
      {getIcon()}
    </TouchableOpacity>
  );
};

export default TabItems;
