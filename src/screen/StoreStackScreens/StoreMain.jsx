import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const StoreMain = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>잔여 코인수 : 100</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>코인 충전</Text>
        <TouchableOpacity style={styles.row}>
          <View style={styles.leftSection}>
            <Image source={require('../../img/10Coin.png')} style={styles.iconStore} />
          </View>
          <View style={styles.middleSection}>
            <Text style={styles.coinTitleText}>10 코인</Text>
            <Text style={styles.coinNoteText}>1 코인당 100원</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.priceText}>1000원</Text>
          </View>
        </TouchableOpacity>
        {/* <Text style={styles.noteText}>소량구매는 1 코인당 100원 입니다.</Text> */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>패키지 할인</Text>
        <TouchableOpacity style={styles.row}>
          <View style={styles.leftSection}>
            <Image source={require('../../img/100Coin.png')} style={styles.iconStore} />
          </View>
          <View style={styles.middleSection}>
            <Text style={styles.coinTitleText}>100 코인</Text>
            <Text style={styles.coinNoteText}>1 코인당 70원</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.priceText}>7000원</Text>
          </View>
        </TouchableOpacity>
        {/* <Text style={styles.noteText}>패키지로 코인을 구매시 할인 된 가격으로 구매가 가능합니다.</Text> */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1년 구독</Text>
        <TouchableOpacity style={styles.row}>
          <View style={styles.leftSection}>
            <Image source={require('../../img/Subscribe.png')} style={styles.iconStore} />
          </View>
          <View style={styles.middleSection}>
            <Text style={styles.coinTitleText}>매월 80 코인</Text>
            <Text style={styles.coinSubtitleText}>자동충전</Text>
            <Text style={styles.coinNoteText}>베너광고 제거</Text>
            <Text style={styles.coinNoteText}>1 코인당 52원</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.priceText}>50000원</Text>
          </View>
        </TouchableOpacity>
        {/* <Text style={styles.noteText}>프로모션 가격은 한정된 기간 동안만 구매가 가능 합니다.</Text> */}
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
    marginVertical: hp('3%'),
  },
  headerText: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#C2C2C2'
  },
  section: {
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    borderTopColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: wp('4%'),
    color: '#717382',
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  // Ensures vertical alignment of icon and text
    marginHorizontal: wp('3%'),
    backgroundColor: '#f5f5f5',  // Slightly darker than background
    borderRadius: wp('4%'),      // Makes the corners rounded
    shadowColor: '#000',         // Adds shadow for floating effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,                // Required for Android shadow
  },
  leftSection: {
    flex: 1,  // 1/3 of the space
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('3%'),
  },
  middleSection: {
    flex: 1,  // 1/3 of the space
    justifyContent: 'center',
    alignItems: 'center',  
    marginLeft: wp('10%'),
  },
  rightSection: {
    flex: 1,  // 1/3 of the space
    justifyContent: 'center',
    alignItems: 'flex-end', 
    marginRight: wp('4%'),
  },
  coinTitleText: {
    fontSize: wp('4.5%'),
    color: '#717382',  
    fontWeight: 'bold',
    fontFamily: 'CustomFont-Bold', 
  },
  coinSubtitleText: {
    fontSize: wp('4.5%'),
    color: '#717382', 
    fontWeight: 'bold',
    marginVertical: hp('0.5%'),
    fontFamily: 'CustomFont-Regular',
  },
  coinNoteText: {
    fontSize: wp('3.5%'),
    color: '#C5C5C5', 
    marginTop: hp('0.5%'),
    fontFamily: 'CustomFont-Light',
  },
  priceText: {
    fontSize: wp('4.5%'),
    color: '#717382',
    fontWeight: 'bold',
    fontFamily: 'CustomFont-Bold',
    textAlign: 'right',
  },
  // noteText: {
  //   fontSize: wp('3.5%'),
  //   color: '#888',
  //   marginTop: hp('1%'),
  //   paddingHorizontal: wp('5%'),
  // },
  iconStore: {
    width: wp('40%'),
    height: wp('35%'),
    marginTop: hp('2%'),
  }
});

export default StoreMain;
