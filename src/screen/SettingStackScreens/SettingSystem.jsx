import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const SettingSystem = () => {
  const navigation = useNavigation();

  // Define each setting option
  const options = [
    { title: '공지사항', icon: 'bullhorn', screen: 'Notice' },
    { title: '결제내역', icon: 'credit-card', screen: 'PaymentHistory' },
    { title: '어플리케이션 정보', icon: 'info', screen: 'AppInfo' },
    { title: '개인정보 보호규정', icon: 'lock', screen: 'PrivacyPolicy' },
    { title: '결제 및 환불규정', icon: 'question', screen: 'RefundPolicy' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Render each option */}
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => navigation.navigate(option.screen)}
        >
          <View style={styles.optionContent}>
            <Icon name={option.icon} size={wp('6%')} color="#FFD700" />
            <Text style={styles.optionText}>{option.title}</Text>
          </View>
          <Icon name="angle-right" size={wp('5%')} color="#B0B0B0" />
        </TouchableOpacity>
      ))}

      {/* Ad section */}
      <View style={styles.adSection}>
        <Text style={styles.adText}>광고자리</Text>
      </View>

      {/* Account Deletion Section */}
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>계정삭제</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.deleteDescription}>
          계정을 삭제하면 해당 아이디로 1개월 내에 다시 가입이 불가합니다.
          계정 삭제시 보유하고 있던 코인은 소멸됩니다.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    paddingBottom: hp('2%'),
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
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: wp('4%'),
    marginLeft: wp('4%'),
    color: '#333333',
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
  deleteButton: {
    marginTop: hp('10%'),
    backgroundColor: '#E0E0E0',
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  deleteText: {
    color: '#FF0000',
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  deleteDescription: {
    color: '#808080',
    fontSize: wp('3.5%'),
    textAlign: 'center',
    paddingHorizontal: wp('5%'),
  },
});

export default SettingSystem;