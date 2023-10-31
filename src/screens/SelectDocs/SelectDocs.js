import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TouchableBtn from '../../components/TouchableBtn/TouchableBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePreview from '../../components/Common/ImagePreview';
import TouchableRoundedBtn from '../../components/TouchableBtn/TouchableRoundedBtn';
import {selectPhotoFromGallary} from '../../utils/ImagePickerHelper';

const SelectDocs = ({navigation, route}) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const {docType} = route.params;

  const selectImageFromGallery = () => {
    let imageSide = frontImage ? setBackImage : setFrontImage;
    selectPhotoFromGallary(imageSide);
  };
  return (
    <View style={{flex: 1, paddingHorizontal: 25}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={docType.image} style={{resizeMode: 'contain'}} />
      </View>

      <View>
        <Text style={{fontSize: 22, fontWeight: '800', marginVertical: 10}}>
          {docType.title}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 22}}>
          {docType.subTitle}
        </Text>
      </View>

      <TouchableBtn
        title="Add photos"
        leftIcon={<Ionicons name="cloud-upload" size={28} color={'#470AB4'} />}
        onPress={selectImageFromGallery}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
          flexWrap: 'wrap',
        }}>
        <ImagePreview imageUri={frontImage} />
        <ImagePreview imageUri={backImage} />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 25}}>
        <TouchableRoundedBtn
          title="Done"
          disabled={frontImage && backImage}
          // onPress={() => navigation.navigate('AddVehicle', {selectedVehicle})}
        />
      </View>
    </View>
  );
};

export default SelectDocs;
