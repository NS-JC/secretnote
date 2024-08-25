import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const UploadChecking = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { image } = route.params;

  useEffect(() => {
    const hideTabBar = navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'none' },
      });
    });

    const showTabBar = navigation.addListener('blur', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' }, // Restores the tab bar when leaving this screen
      });
    });

    return () => {
      hideTabBar();
      showTabBar();
    };
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <Image
        source={{ uri: image.path }}
        style={styles.uploadedImage}
        resizeMode="contain"
      />
      <Text style={styles.text}>사진(텍스트)을 확인해 주세요</Text>
      <Text style={styles.additionalText}>위 문제와 유사한 문제를 만듭니다</Text>

      <TouchableOpacity style={styles.confirmButton} onPress={() => {}}>
        <Text style={styles.confirmButtonText}>문제 만들기</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>취소</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    backgroundColor: '#f0f0f0',
  },
  uploadedImage: {
    width: wp('100%'), // Adjusted to ensure everything fits on one screen
    height: hp('55%'), // Adjusted to ensure the image maintains its aspect ratio
    marginBottom: hp('2%'),
  },
  text: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    textAlign: 'center',
  },
  additionalText: {
    fontSize: hp('2%'),
    color: 'gray',
    marginBottom: hp('3%'),
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#ffffff',
    paddingVertical: hp('2%'),
    width: wp('80%'),
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: hp('2%'),
    borderWidth: 1,
    borderColor: '#e0e0e0', 
  },
  confirmButtonText: {
    fontSize: hp('2%'),
    color: '#007aff',
  },
  cancelButton: {
    backgroundColor: '#ffffff',
    paddingVertical: hp('2%'),
    width: wp('80%'),
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0', 
  },
  cancelButtonText: {
    fontSize: hp('2%'),
    color: '#f66',
  },
});

export default UploadChecking;
