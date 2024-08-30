import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SettingProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null); // Initially, no image is selected
  const [nickname, setNickname] = useState('현재닉네임'); // Replace with data fetched from backend
  const [rank] = useState('자비로운 영주'); // Replace with data fetched from backend
  const [email] = useState('abc123123@gmail.com'); // Replace with data fetched from backend

  const selectProfilePicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        setProfilePicture(image.path);
      })
      .catch(() => {
        // Removed the alert for canceled selection
      });
  };

  const saveChanges = () => {
    const prohibitedWords = ['badword1', 'badword2', 'specialword']; // Add prohibited words here
    const isNicknameValid = !prohibitedWords.some(word => nickname.includes(word));

    if (!isNicknameValid) {
      Alert.alert('닉네임 오류', '닉네임에 허용되지 않는 단어가 포함되어 있습니다.');
      return;
    }

    // Backend integration here
    // For example, sending `profilePicture` and `nickname` to the backend
    Alert.alert('저장 완료', '변경사항이 저장되었습니다.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={selectProfilePicture} style={styles.imageContainer}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profileImage} />
        ) : (
          <View style={styles.emptyProfileImage} />
        )}
        </TouchableOpacity>

        <View style={styles.profileEditContainer}>
          <TouchableOpacity onPress={selectProfilePicture}>
            <Text style={styles.profileLabel}>프로필 사진 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectProfilePicture}>
            <Icon name="pencil" size={wp('4%')} color="#007AFF" style={styles.pencilIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text>닉네임</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={nickname}
              onChangeText={setNickname}
              placeholder="닉네임을 입력하세요"
              placeholderTextColor="#B0B0B0"
            />
            <Icon name="pencil" size={wp('4%')} color="#007AFF" />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text>등급</Text>
          <TextInput
            style={styles.input}
            value={rank}
            editable={false}
            placeholder="등급이 표시됩니다"
            placeholderTextColor="#B0B0B0"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>이메일</Text>
          <TextInput
            style={styles.input}
            value={email}
            editable={false}
            placeholder="이메일이 표시됩니다"
            placeholderTextColor="#B0B0B0"
          />
        </View>

        <TouchableOpacity onPress={saveChanges} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>변경사항 저장</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: wp('5%'),
    paddingBottom: hp('10%'), // Extra padding to prevent the save button from being hidden
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: hp('2%'),
    alignSelf: 'center',
  },
  profileImage: {
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: wp('20%'),
  },
  emptyProfileImage: {
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: wp('20%'),
    borderWidth: 1,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('5%'), // Keeps the same margin as before
    width: '100%', // Change to 100% to take full width
  },
  profileLabel: {
    fontSize: wp('4%'),
    color: '#007AFF',
  },
  pencilIcon: {
    marginLeft: wp('2%'),
  },
  inputContainer: {
    marginBottom: hp('2%'),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: wp('2%'),
    backgroundColor: '#F8F8F8',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: wp('4%'),
    paddingVertical: hp('1%'),
    color: '#333333',
  },
  saveButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    position: 'absolute',
    bottom: hp('2%'),
    left: 0,
    right: 0,
  },
  saveButtonText: {
    fontSize: wp('4%'),
    color: '#007AFF',
  },
});

export default SettingProfile;
