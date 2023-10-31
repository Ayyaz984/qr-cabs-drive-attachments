import ImagePicker from 'react-native-image-crop-picker';
const selectPhotoFromGallary = setImage => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(capturedImg => setImage(capturedImg.path));
};

const takePhotoFromCamera = (image, setImage) => {
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(capturedImg => {
    setImage(capturedImg.path);
  });
};

export {selectPhotoFromGallary, takePhotoFromCamera};
