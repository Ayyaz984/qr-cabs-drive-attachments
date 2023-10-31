import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageAvatar = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Ionicons name="camera" color={'#090A0A'} size={24} />
    </TouchableOpacity>
  );
};

export default ImageAvatar;
