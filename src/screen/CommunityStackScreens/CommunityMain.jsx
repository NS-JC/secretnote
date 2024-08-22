import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommunityMain = ({ navigation }) => {
  const [notices, setNotices] = useState([
    { id: '1', title: 'Fetch Title', content: 'Fetch Content', date: 'Fetch Date' },
    { id: '2', title: 'New Policy Update', content: 'Check the new policy update.', date: '7/29/19' },
    { id: '3', title: 'Holiday Announcement', content: 'We will have a holiday on Friday.', date: '7/29/19' },
  ]);

  const renderNotice = ({ item }) => (
    <TouchableOpacity style={styles.noticeItem}>
      <View style={styles.textContainer}>
        <Text style={styles.noticeTitle}>{item.title}</Text>
        <Text style={styles.noticeContent}>{item.content}</Text>
      </View>
      <Text style={styles.noticeDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notices}
        renderItem={renderNotice}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    backgroundColor: '#f8f9fa',
  },
  noticeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    paddingRight: wp('5%'),
  },
  noticeTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333',
  },
  noticeContent: {
    fontSize: wp('4%'),
    color: '#555',
    marginTop: hp('0.5%'),
  },
  noticeDate: {
    fontSize: wp('4%'),
    color: '#999',
  },
});

export default CommunityMain;
