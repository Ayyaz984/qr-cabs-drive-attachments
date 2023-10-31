import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SelectVehicleCard = ({
  title,
  imagePath,
  selectedVehicle,
  setSelectedVehicle,
}) => {
  const deviceWidth = Dimensions.get('screen').width;
  return (
    <TouchableOpacity
      onPress={() => setSelectedVehicle(title)}
      style={{
        width: deviceWidth / 3 - 20,
        height: 110,
        backgroundColor: selectedVehicle === title ? '#5F2CBE1A' : '#ffffff',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: selectedVehicle === title ? '#470AB4' : '#090A0A14',
      }}>
      <Image
        source={imagePath}
        style={{tintColor: selectedVehicle === title ? '#470AB4' : '#B5B5B5'}}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default SelectVehicleCard;
