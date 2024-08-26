import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

const UploadMain = () => {
  const navigation = useNavigation();

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then(image => {
        navigation.navigate('Checking', { image });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const openLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then(image => {
        navigation.navigate('Checking', { image });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.CameraIconBig}>
        <TouchableOpacity onPress={openCamera}>
          <Image source={require('../../img/Camera.png')} style={styles.iconBig} />
        </TouchableOpacity>
      </View>

      <View style={styles.TakePictureText}>
        <Text style={styles.text}>사진 찍기</Text>
      </View>
      <View style={styles.TakePictureAdditionalText}>
        <Text style={styles.additionalText}>틀린문제를 사진찍어서 올려주세요</Text>
      </View>

      <View style={styles.UploadIconBig}>
        <TouchableOpacity onPress={openLibrary}>
          <Image source={require('../../img/Upload.png')} style={styles.iconBig} />
        </TouchableOpacity>
      </View>

      <View style={styles.UploadText}>
        <Text style={styles.text}>앨범에서 선택하기</Text>
      </View>
      <View style={styles.UploadTextAdditionalText}>
        <Text style={styles.additionalText}>앨범에 있는 영어문제 사진을 선택해주세요</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  CameraIconBig: {
    flex: 1,
    marginTop: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBig: {
    width: wp('30%'), // Responsive width
    height: wp('30%'), // Responsive height (keep it square)
  },
  TakePictureText: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
  },
  TakePictureAdditionalText: {
    flex: 1,
    marginTop: hp('2%'), // Responsive margin
    alignItems: 'center',
  },
  additionalText: {
    fontSize: wp('3.5%'), // Responsive font size
    color: '#888888',
  },
  UploadIconBig: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UploadText: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  UploadTextAdditionalText: {
    flex: 1,
    marginTop: hp('2%'), // Responsive margin
    alignItems: 'center',
  },
});

export default UploadMain;
