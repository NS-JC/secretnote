import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { launchCamera, CameraOptions, ImagePickerResponse } from 'react-native-image-picker';

const UploadMain = () => {
  const openCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    try {
      const response: ImagePickerResponse = await launchCamera(options);
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
      } else if (response.errorCode) {
        Alert.alert(`Camera error: ${response.errorMessage}`);
      } else if (response.assets && response.assets.length > 0) {
        console.log('Photo URI: ', response.assets[0].uri);
      }
    } catch (error: any) {
      Alert.alert('Camera error: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.CameraHead}>
        <Text style={styles.headerText}>Camera</Text>
      </View>
      <View style={styles.CameraIconBig}>
        <TouchableOpacity onPress={openCamera}>
          <Image source={require('../../src/Camera.png')} style={styles.iconBig} />
        </TouchableOpacity>
      </View>
      <View style={styles.TakePictureText}>
        <Text style={styles.text}>사진 찍기</Text>
      </View>
      <View style={styles.TakePictureAdditionalText}>
        <Text style={styles.additionalText}>틀린문제를 사진찍어서 올려주세요</Text>
      </View>
      <View style={styles.UploadIconBig}>
        <TouchableOpacity>
          <Image source={require('../../src/Upload.png')} style={styles.iconBig} />
        </TouchableOpacity>
      </View>
      <View style={styles.UploadText}>
        <Text style={styles.text}>앨범에서 선택하기</Text>
      </View>
      <View style={styles.UploadTextAdditionalText}>
        <Text style={styles.additionalText}>앨범에 있는 영어문제 사진을 선택해주세요</Text>
      </View>
      {/* <View style={styles.MenuBarBottom}>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../../src/Icon-1-Selected.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../../src/Icon-2.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../../src/Icon-3.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../../src/Icon-4.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View> */}
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
  MenuBarBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eeeeee',
    paddingVertical: 10,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  menuText: {
    fontSize: 12,
    color: '#333333',
  },
});

export default UploadMain;
