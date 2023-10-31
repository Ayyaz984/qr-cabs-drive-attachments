import {View, Text} from 'react-native';
import React from 'react';
import TouchableBtn from '../../components/TouchableBtn/TouchableBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Vehicles = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 25, paddingVertical: 15}}>
      {/* <View
        style={{
          backgroundColor: '#FFFFFF',
          padding: 15,
          borderRadius: 15,
          elevation: 5,
          height: 120,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            marginBottom: 10,
            fontSize: 18,
            fontWeight: '800',
          }}>
          Loreum ipsum
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '400',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </Text>
      </View> */}

      <View
        style={{
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <TouchableBtn
          title="Add Vehicle"
          leftIcon={<Ionicons name="person" size={20} color={'#470AB4'} />}
          onPress={() => {
            navigation.navigate('SelectVehicle');
          }}
        />
      </View>
    </View>
  );
};

export default Vehicles;
