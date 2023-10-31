import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TouchableBtn = ({title, leftIcon, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5F2CBE1A',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#470AB4',
        paddingHorizontal: 20,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
      onPress={onPress}>
      {leftIcon && <View>{leftIcon}</View>}
      <Text
        style={{
          color: '#470AB4',
          marginLeft: 20,
          fontSize: 16,
          fontWeight: '500',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableBtn;
