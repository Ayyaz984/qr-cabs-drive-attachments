import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import SelectVehicleCard from '../../components/AddVehicle/SelectVehicleCard';
import TouchableBtn from '../../components/TouchableBtn/TouchableBtn';
import TouchableRoundedBtn from '../../components/TouchableBtn/TouchableRoundedBtn';

const SelectVehicle = ({navigation}) => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  return (
    <View style={{flex: 1, padding: 25}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <SelectVehicleCard
          title="Car"
          imagePath={require('../../assets/images/car.png')}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
        />

        <SelectVehicleCard
          title="Auto"
          imagePath={require('../../assets/images/auto.png')}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
        />

        <SelectVehicleCard
          title="Bike"
          imagePath={require('../../assets/images/bike.png')}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableRoundedBtn
          title="Next"
          disabled={Boolean(selectedVehicle.length)}
          onPress={() => navigation.navigate('AddVehicle', {selectedVehicle})}
        />
      </View>
    </View>
  );
};

export default SelectVehicle;
