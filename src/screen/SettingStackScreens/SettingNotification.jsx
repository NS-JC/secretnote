import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SettingNotification = () => {
  const [isStudyNotificationEnabled, setIsStudyNotificationEnabled] = useState(true);
  const [isCommentNotificationEnabled, setIsCommentNotificationEnabled] = useState(true);

  const toggleStudyNotification = () => {
    setIsStudyNotificationEnabled(previousState => !previousState);
    if (isStudyNotificationEnabled) {
      // Backend integration needed to disable study notifications
      
    } else {
      // Backend integration needed to enable study notifications
      
    }
  };

  const toggleCommentNotification = () => {
    setIsCommentNotificationEnabled(previousState => !previousState);
    if (isCommentNotificationEnabled) {
      // Backend integration needed to disable comment notifications
      
    } else {
      // Backend integration needed to enable comment notifications
      
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>복습 알림</Text>
          <View style={styles.row}>
            <Text style={styles.text}>1주 단위 복습 푸시 알림</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#34C759' }}
              thumbColor={isStudyNotificationEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleStudyNotification}
              value={isStudyNotificationEnabled}
            />
          </View>
          <Text style={styles.subtext}>오늘 공부했던 것을 1주일 후에도 기억하는지 확인하세요!</Text>
        </View>

        <View style={styles.adSpace}>
          <Text style={styles.adText}>광고자리</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>커뮤니티 알림</Text>
          <View style={styles.row}>
            <Text style={styles.text}>커뮤니티 댓글 푸시 알림</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#34C759' }}
              thumbColor={isCommentNotificationEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleCommentNotification}
              value={isCommentNotificationEnabled}
            />
          </View>
          <Text style={styles.subtext}>내가 쓴 글에 친구들이 남긴 댓글을 확인하세요!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollViewContent: {
    paddingTop: hp('3%'),
    paddingBottom: hp('10%'), // Extra padding to prevent the bottom content from being hidden
  },
  section: {
    marginBottom: hp('2.5%'),
  },
  sectionTitle: {
    fontSize: wp('3.5%'),
    color: '#808080',
    marginBottom: hp('1%'),
    paddingHorizontal: wp('5%'), // Add padding inside the section for text
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('0.5%'),
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingHorizontal: wp('5%'), // Padding for the row (same as the section padding)
    paddingVertical: hp('1%'),
  },
  text: {
    fontSize: wp('4.5%'),
    marginBottom: hp('1%'),
    color: '#000',
  },
  subtext: {
    fontSize: wp('3.5%'),
    color: '#888',
    paddingHorizontal: wp('5%'), // Add padding inside the section for text
  },
  adSpace: {
    height: hp('12.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginVertical: hp('2.5%'),
  },
  adText: {
    fontSize: wp('5%'),
    color: '#000',
  },
});

export default SettingNotification;
