import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DocumentAccordionItem = ({title, iconName, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 40,
          backgroundColor: '#D9D9D9',
          marginRight: 15,
        }}
      />
      <Text style={{flex: 1, color: 'black'}}>{title}</Text>
      <Ionicons name={iconName} size={24} color={'#090A0A'} />
    </TouchableOpacity>
  );
};

export default DocumentAccordionItem;
