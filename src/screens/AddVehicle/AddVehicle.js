import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import autoImage from '../../assets/images/auto.png';
import bikeImage from '../../assets/images/bike.png';
import carImage from '../../assets/images/car.png';
import Card from '../../components/Card/Card';

const AddVehicle = ({navigation, route}) => {
  const [vehicleImage, setVehicleImage] = useState(null);
  const selectedVehicle = route.params.selectedVehicle;

  const docsDetail = {
    Vehicle_Photos: {
      title: 'Upload Vehicle Photos',
      subTitle:
        'Upload clear vehicles pictures from all sides (i.e. front, back and sideways)',
      image: require('../../assets/images/vehicle-photo.png'),
    },
    Registration_Certificate: {
      title: 'Registration Certificate (RC)',
      subTitle:
        'Upload RC with clear name and car details clearly printed on an official document.”front and back”',
      image: require('../../assets/images/registration-certificate.png'),
    },
    Vehicle_Insurance: {
      title: 'Vehicle Insurance',
      subTitle:
        'Upload RC with clear name and car details clearly printed on an official document.”front and back”',
      image: require('../../assets/images/vehicle-insurance.png'),
    },
    Tax_Permit: {
      title: 'Tax Permit',
      subTitle:
        'Upload RC with clear name and car details clearly printed on an official document.”front and back”',
      image: require('../../assets/images/tax-permit.png'),
    },
    Vehicle_Fitness: {
      title: 'Vehicle Fitness(Optional)',
      subTitle:
        'Upload RC with clear name and car details clearly printed on an official document.”front and back”',
      image: require('../../assets/images/tax-permit.png'),
    },
  };

  const selectedVehicleImage = () => {
    switch (selectedVehicle) {
      case 'Bike':
        setVehicleImage(bikeImage);
        break;
      case 'Auto':
        setVehicleImage(autoImage);
        handleCardPress;
      default:
        setVehicleImage(carImage);
        break;
    }
  };

  const handleCardPress = docType => {
    navigation.navigate('SelectDocs', {
      selectedVehicle,
      docType: docsDetail[docType.split(' ').join('_')],
    });
  };
  useEffect(() => {
    navigation.setOptions({title: `Add ${selectedVehicle}`});
    selectedVehicleImage();
  }, [selectedVehicle]);
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 25, paddingVertical: 15}}>
        <View
          style={{
            backgroundColor: '#5F2CBE1A',
            height: 130,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          {vehicleImage && (
            <Image source={vehicleImage} style={{tintColor: '#470AB4'}} />
          )}
        </View>

        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '800',
              color: '#064347',
              marginBottom: 10,
            }}>
            Enter your {selectedVehicle.toLowerCase()} details
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#064347'}}>
            Follow below instructions to complete vehicle details
          </Text>

          <View style={{marginVertical: 10}}>
            <Card
              title="Vehicle Photos"
              subTitle="Upload your vehicle photos to verify the car details"
              leftIcon="images-outline"
              rightIcon="chevron-forward-outline"
              onCardPress={() => handleCardPress('Vehicle Photos')}
            />

            <Card
              title="Registration Certificate (RC)"
              subTitle="Upload your RC to verify the car details"
              leftIcon="images-outline"
              rightIcon="chevron-forward-outline"
              onCardPress={() => handleCardPress('Registration Certificate')}
            />

            {selectedVehicle === 'Car' && (
              <>
                <Card
                  title="Vehicle Insurance"
                  subTitle="Upload your vehicle photos to verify the car details"
                  leftIcon="images-outline"
                  rightIcon="chevron-forward-outline"
                  onCardPress={() => handleCardPress('Vehicle Insurance')}
                />
                <Card
                  title="Tax Permit"
                  subTitle="Upload your vehicle photos to verify the car details"
                  leftIcon="images-outline"
                  rightIcon="chevron-forward-outline"
                  onCardPress={() => handleCardPress('Tax Permit')}
                />
                <Card
                  title="Vehicle Fitness(Optional)"
                  subTitle="Upload your vehicle photos to verify the car details"
                  leftIcon="images-outline"
                  rightIcon="chevron-forward-outline"
                  onCardPress={() => handleCardPress('Vehicle Fitness')}
                />
              </>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddVehicle;
