import React, { useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NoticesContext } from '../../context/NoticesContext';

const CommunityMain = ({ navigation }) => {
  const { notices } = useContext(NoticesContext);
  const [selectedBoard, setSelectedBoard] = useState('인기글 게시판');

  // Filter notices based on the selected board (to be implemented with backend)
  const filteredNotices = notices.filter(notice => notice.board === selectedBoard);

  const renderNotice = ({ item }) => (
    <TouchableOpacity 
      style={styles.noticeItem}
      onPress={() => navigation.navigate('Comment', { 
        title: item.title, 
        content: item.content, 
        date: item.date,
        userProfilePicture: item.userProfilePicture, // Pass the profile picture to the Comment screen 
      })}
    >
      <Image source={item.profilePicture} style={styles.profilePicture} />
      <View style={styles.textContainer}>
        <Text style={styles.userId}>{item.userId}</Text>
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
        {['인기글 게시판', '자유 게시판', '공부 게시판'].map(board => (
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
    paddingHorizontal: wp('5%'),
    backgroundColor: '#f8f9fa',
  },
  boardSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: hp('2%'),
  },
  boardButton: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedBoardButton: {
    backgroundColor: '#eee',
  },
  boardButtonText: {
    fontSize: wp('4%'),
    color: '#333',
  },
  noticeItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePicture: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    marginRight: wp('3%'),
  },
  textContainer: {
    flex: 1,
  },
  userId: {
    fontSize: wp('4%'),
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  noticeTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333',
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
    right: wp('5%'),
    bottom: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('2%'),
  },
  iconText: {
    marginLeft: wp('1%'),
    fontSize: wp('4%'),
    color: '#333',
  },
});

export default CommunityMain;