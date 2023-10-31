import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({title, subTitle, leftIcon, rightIcon, onCardPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FFFFFF',
        height: 90,
        borderRadius: 15,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        marginVertical: 10,
      }}
      onPress={onCardPress}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Ionicons name={leftIcon} size={30} color={'#470AB4'} />
        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 15}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#064347'}}>
            {title}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '400', color: '#064347'}}>
            {subTitle}
          </Text>
        </View>
        <Ionicons name={rightIcon} size={24} color={'#470AB4'} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
