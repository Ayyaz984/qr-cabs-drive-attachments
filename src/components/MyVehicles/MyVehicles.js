import {View, Text} from 'react-native';
import React from 'react';

const MyVehicles = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#00000014',
        paddingHorizontal: 10,
      }}>
      <Ionicons name="person" size={24} color={'red'} />
      <View style={{flex: 1, marginLeft: 15}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Vehicle Name</Text>
        <Text style={{fontSize: 12, fontWeight: '400'}}>Company</Text>
      </View>
      <Ionicons name="trash-outline" size={24} color={'red'} />
    </View>
  );
};

export default MyVehicles;
