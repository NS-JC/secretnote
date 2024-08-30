import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures the content can grow beyond the screen size
    justifyContent: 'center', // Centers the content when it's smaller than the screen
    paddingVertical: hp('5%'), // Adds some padding to prevent the content from sticking to the edges
  },
  CameraIconBig: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBig: {
    width: wp('35%'), // Responsive width
    height: wp('35%'), // Responsive height (keep it square)
  },
  TakePictureText: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  text: {
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
  },
  TakePictureAdditionalText: {
    marginTop: hp('2%'), // Responsive margin
    alignItems: 'center',
  },
  additionalText: {
    fontSize: wp('4%'), // Responsive font size
    color: '#888888',
  },
  UploadIconBig: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('8%'),
  },
  UploadText: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  UploadTextAdditionalText: {
    alignItems: 'center',
    marginTop: hp('2%'), // Responsive margin
  },
});

export default UploadMain;
