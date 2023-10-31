import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';

const ImagePreview = ({imageUri}) => {
  console.log('imageUri:', imageUri);
  const deviceWidth = Dimensions.get('screen').width;
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        width: deviceWidth / 2 - 40,
        height: 100,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#DCDCDC',
      }}>
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={{
            aspectRatio: 1.6,
            alignSelf: 'center',
            height: '100%',
            width: '100%',
            borderRadius: 15,
          }}
        />
      )}
    </View>
  );
};

export default ImagePreview;
