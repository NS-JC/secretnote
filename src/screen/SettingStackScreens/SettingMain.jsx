import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const SettingMain = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="id-badge" size={wp('6%')} color="#2196F3" />
          <Text style={styles.optionTitle}>프로필 설정</Text>
          <Text style={styles.optionSubtitle}>Email: 이메일표시@gmail.com</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

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
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>COMMUNITY</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="pencil" size={wp('6%')} color="#4CAF50" />
          <Text style={styles.optionTitle}>내가 쓴 글</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="bell" size={wp('6%')} color="#FF5722" />
          <Text style={styles.optionTitle}>알림설정</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="heart" size={wp('6%')} color="#E91E63" />
          <Text style={styles.optionTitle}>초대하기</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>STUDY HISTORY</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="info-circle" size={wp('6%')} color="#2196F3" />
          <Text style={styles.optionTitle}>2024.07.07</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="info-circle" size={wp('6%')} color="#2196F3" />
          <Text style={styles.optionTitle}>2024.07.06</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="info-circle" size={wp('6%')} color="#2196F3" />
          <Text style={styles.optionTitle}>2024.07.05</Text>
        </View>
        <Icon name="angle-right" size={wp('6%')} color="#B0B0B0" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  sectionHeader: {
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
  sectionTitle: {
    fontSize: wp('3.5%'),
    color: '#808080',
    fontWeight: 'bold',
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
  },
});

export default SettingMain;
