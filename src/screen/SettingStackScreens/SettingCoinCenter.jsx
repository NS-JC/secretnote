import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SettingCoinCenter = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Remain Coin 100</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CHARGING COIN</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.coinText}>10 COIN</Text>
          <Text style={styles.priceText}>1000 원</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.coinText}>30 COIN</Text>
          <Text style={styles.priceText}>3000 원</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.coinText}>50 COIN</Text>
          <Text style={styles.priceText}>5000 원</Text>
        </TouchableOpacity>
        <Text style={styles.noteText}>소량구매는 1 코인당 100원 입니다.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PACKAGE</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.coinText}>100 COIN</Text>
          <Text style={styles.priceText}>7000 원</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.coinText}>200 COIN</Text>
          <Text style={styles.priceText}>13000 원</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.coinText}>330 COIN</Text>
          <Text style={styles.priceText}>20000 원</Text>
        </TouchableOpacity>
        <Text style={styles.noteText}>패키지로 코인을 구매시 할인 된 가격으로 구매가 가능합니다.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROMOTION</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.coinText}>1000 COIN</Text>
          <Text style={styles.priceText}>50000 원</Text>
        </TouchableOpacity>
        <Text style={styles.noteText}>프로모션 가격은 한정된 기간 동안만 구매가 가능 합니다.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#f7f7f7',
    paddingVertical: hp('2%'),
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  headerText: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
  },
  section: {
    marginBottom: hp('2%'),
    paddingBottom: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: wp('4%'),
    color: '#555',
    marginBottom: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingVertical: hp('1.5%'),
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    paddingHorizontal: wp('5%'),
  },
  coinText: {
    fontSize: wp('4.5%'),
  },
  priceText: {
    fontSize: wp('4.5%'),
    color: '#000',
  },
  noteText: {
    fontSize: wp('3.5%'),
    color: '#888',
    marginTop: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
});

export default SettingCoinCenter;
