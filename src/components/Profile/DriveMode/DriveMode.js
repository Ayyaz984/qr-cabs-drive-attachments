import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';

const DriveMode = ({index, title, driveMode, handleDriveMode}) => {
  const deviceWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: deviceWidth / 2 - 30,
          borderColor: driveMode === title ? '#470AB4' : '#090A0A',
        },
      ]}
      onPress={() => handleDriveMode(title)}>
      <Text style={{color: driveMode === title ? '#470AB4' : '#090A0A'}}>
        {title}
      </Text>
    </TouchableOpacity>
    // <TouchableOpacity
    //   style={[
    //     styles.container,
    //     {
    //       width: boxSize.toFixed(),
    //       marginRight: index === 0 || index / 2 !== 0 ? 10 : 0,
    //       borderColor: driveMode === title ? '#470AB4' : '#090A0A',
    //     },
    //   ]}
    //   onPress={() => handleDriveMode(title)}>
    //   <Text style={{color: driveMode === title ? '#470AB4' : '#090A0A'}}>
    //     {title}
    //   </Text>
    // </TouchableOpacity>
  );
};

export default DriveMode;
