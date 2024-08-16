import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const UploadMain = () => {
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      // Handle the image data here (e.g., upload or display)
    }).catch(error => {
      console.log(error);
    });
  };

  const openLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      // Handle the image data here (e.g., upload or display)
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.CameraHead}>
        <Text style={styles.headerText}>Camera</Text>
      </View>

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
  CameraHead: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  CameraIconBig: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBig: {
    width: 80,
    height: 80,
  },
  TakePictureText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TakePictureAdditionalText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  additionalText: {
    fontSize: 14,
    color: '#888888',
  },
  UploadIconBig: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UploadText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UploadTextAdditionalText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UploadMain;
