import React, { useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NoticesContext } from '../../context/NoticesContext';


const CommunityMain = ({ navigation }) => {
  const { notices, selectedBoard, setSelectedBoard } = useContext(NoticesContext);

  // Filter notices based on the selected board (to be implemented with backend)
  const filteredNotices = notices.filter(notice => notice.board === selectedBoard);

  const renderNotice = ({ item }) => (
    <TouchableOpacity 
      style={styles.noticeItem}
      onPress={() => navigation.navigate('Comment', { 
        title: item.title, 
        content: item.content, 
        date: item.date,
        userId: item.userId, 
        likes: item.likes,
        comments: item.comments,
        userProfilePicture: item.profilePicture 
      })}
    >
      <View style={styles.profileContainer}>
        <Image source={item.profilePicture} style={styles.profilePicture} />
        <Text style={styles.userId}>{item.userId}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.noticeTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.noticeContent} numberOfLines={1} ellipsizeMode="tail">
          {item.content}
        </Text>
      </View>
      <Text style={styles.noticeDate} numberOfLines={1} ellipsizeMode="tail">
        {item.date}
      </Text>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <Icon name="heart-o" size={wp('4%')} color="#333" />
          <Text style={styles.iconText}>{item.likes}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="comment-o" size={wp('4%')} color="#333" />
          <Text style={styles.iconText}>{item.comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.boardSelector}>
        {['자유 게시판', '공부 게시판'].map(board => (
          <TouchableOpacity
            key={board}
            style={[
              styles.boardButton,
              selectedBoard === board && styles.selectedBoardButton
            ]}
            onPress={() => setSelectedBoard(board)}
          >
            <Text style={styles.boardButtonText}>{board}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredNotices}
        renderItem={renderNotice}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  boardSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boardButton: {
    width: wp('50%'), 
    height: wp('10%'),
    justifyContent: 'center', 
    alignItems: 'center',
  },
  selectedBoardButton: {
    backgroundColor: '#fff',
  },
  boardButtonText: {
    fontSize: wp('4%'),
    color: '#333',
  },
  noticeItem: {
    marginVertical: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: hp('1.5%'),
    borderTopWidth: 0.1,
    borderTopolor: '#ccc',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  profileContainer: {
    paddingLeft: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center', // Ensures the profile picture and user ID are vertically aligned
    marginBottom: hp('1%'),
  },
  profilePicture: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    marginRight: wp('3%'),
  },
  textContainer: {
    flex: 1,
    paddingLeft: wp('5%'),
  },
  userId: {
    fontSize: wp('4%'),
    color: '#333',
  },
  noticeTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333',
    marginTop: hp('0.5%'),
    marginBottom: hp('0.5%'),
  },
  noticeContent: {
    fontSize: wp('4%'),
    color: '#555',
  },
  noticeDate: {
    fontSize: wp('4%'),
    color: '#999',
    position: 'absolute',
    right: wp('5%'),
    top: hp('2%'),
  },
  iconContainer: {
    position: 'absolute',
    right: wp('2%'),
    bottom: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('3%'),
  },
  iconText: {
    marginLeft: wp('1%'),
    fontSize: wp('4%'),
    color: '#333',
  },
});

export default CommunityMain;