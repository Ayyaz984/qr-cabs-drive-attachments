import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TouchableRoundedBtn = ({title, disabled, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: !disabled ? '#D0D0D0' : '#0D0D0F',
        borderRadius: 25,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
      onPress={onPress}
      disabled={!disabled}>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '800',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableRoundedBtn;
