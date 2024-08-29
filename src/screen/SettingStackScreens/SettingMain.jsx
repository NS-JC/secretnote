import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const SettingMain = () => {
  const navigation = useNavigation();

  // Example data for profile, to be fetched from the backend
  const profileData = {
    profilePicture: '', // replace with actual image URL or data from the backend
    nickname: 'ABC',
    rank: '자비로운 영주',
    currentCoin: 100,
    email: 'awoefij@gmail.com'
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: profileData.profilePicture || 'https://via.placeholder.com/150' }} // Placeholder for profile picture
          style={styles.profilePicture}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.nickname}>닉네임: {profileData.nickname}</Text>
          <Text style={styles.rank}>등급: {profileData.rank}</Text>
          <Text style={styles.currentCoin}>보유코인: {profileData.currentCoin} 개</Text>
          <Text style={styles.email}>Email: {profileData.email}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.profileEditButton} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileEditButtonText}>프로필 수정</Text>
      </TouchableOpacity>

      <View style={styles.adSection}>
        <Text style={styles.adText}>광고자리</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>COIN CENTER</Text>
      </View>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('CoinCenter')}
      >
        <View style={styles.optionContent}>
          <Icon name="star" size={wp('6%')} color="#FFC107" />
          <Text style={styles.optionTitle}>코인 충전소</Text>
          <Text style={styles.optionSubtitle}>보유코인: {profileData.currentCoin} 개</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Coupon')}
      >
        <View style={styles.optionContent}>
          <Icon name="ticket" size={wp('6%')} color="#FFC107" />
          <Text style={styles.optionTitle}>쿠폰함</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>COMMUNITY</Text>
      </View>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('MyContents')}
      >
        <View style={styles.optionContent}>
          <Icon name="pencil" size={wp('6%')} color="#4CAF50" />
          <Text style={styles.optionTitle}>내가 쓴 글</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Notification')}
      >
        <View style={styles.optionContent}>
          <Icon name="bell" size={wp('6%')} color="#FF5722" />
          <Text style={styles.optionTitle}>알림설정</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Invite')}
      >
        <View style={styles.optionContent}>
          <Icon name="heart" size={wp('6%')} color="#E91E63" />
          <Text style={styles.optionTitle}>초대하기</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => console.log('Logout')} // Placeholder for logout functionality
      >
        <Text style={styles.logoutText}>로그아웃</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    paddingBottom: hp('2%')
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('5%'),
    backgroundColor: '#FFFFFF',
  },
  profilePicture: {
    width: wp('30%'), // Increased the size from 15% to 20%
    height: wp('30%'),
    borderRadius: wp('50%'),
    backgroundColor: '#E0E0E0', // Placeholder color for profile picture background
  },
  profileDetails: {
    marginLeft: wp('4%'),
  },
  nickname: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: hp('0.5%'), // Added margin for spacing between '닉네임' and '등급'
  },
  rank: {
    fontSize: wp('4%'),
    color: '#808080',
    marginTop: hp('1.5%'), // Added margin for spacing between '등급' and the next item
  },
  currentCoin: {
    fontSize: wp('4%'),
    color: '#808080',
    marginTop: hp('0.5%'),
  },
  email: {
    fontSize: wp('4%'),
    color: '#808080',
    marginTop: hp('0.5%'),
  },
  profileEditButton: {
    backgroundColor: '#FFFFFF', // Changed to white background
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    justifyContent: 'center', // Align text vertically to center
    alignItems: 'center', // Align text horizontally to center
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    flex: 1,
  },
  profileEditButtonText: {
    color: '#2196F3', // Changed to blue text color
    fontSize: wp('4%'),
  },
  adSection: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('2%'),
    backgroundColor: '#FFFFFF',
    marginVertical: hp('1%'),
  },
  adText: {
    fontSize: wp('4%'),
    color: '#000000',
  },
  sectionHeader: {
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
  sectionTitle: {
    fontSize: wp('3.5%'),
    color: '#808080',
  },
  option: {
    backgroundColor: '#FFFFFF',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    flex: 1,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: wp('4%'),
    marginLeft: wp('2.5%'),
    color: '#333333',
  },
  optionSubtitle: {
    fontSize: wp('3.5%'),
    color: '#808080',
    marginLeft: wp('3%'),
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('2%'),
    backgroundColor: '#FFFFFF',
    marginVertical: hp('1%'),
  },
  logoutText: {
    color: '#FF0000',
    fontSize: wp('4%'),
  },
});

export default SettingMain;
