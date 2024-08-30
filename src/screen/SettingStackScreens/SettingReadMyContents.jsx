import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Image , ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import GoogleIcon from '../../img/GoogleIcon.png'

const CommunityComment = ({ route, navigation }) => {
  const { title, content, date } = route.params;
  const [comments, setComments] = useState([
    { id: '1', profilePicture: GoogleIcon, userId: 'User1', commentContent: 'This is a comment', date: '9/24/19' },
    { id: '2', profilePicture: GoogleIcon, userId: 'User2', commentContent: 'Another comment', date: '9/24/19' },
  ]);

  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData = {
        id: (comments.length + 1).toString(),
        userId: 'CurrentUser',
        commentContent: newComment,
        date: new Date().toLocaleDateString(),
        userProfilePicture, // Assign the profile picture for the new comment
      };
      setComments([...comments, newCommentData]);
      setNewComment('');
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentItem}>
      <Image source={item.profilePicture} style={styles.profilePicture} />
      <View style={styles.commentTextContainer}>
        <Text style={styles.commentUser}>{item.userId}</Text>
        <Text style={styles.commentContent}>{item.commentContent}</Text>
      </View>
      <Text style={styles.commentDate}>{item.date}</Text>
    </View>
  );

  useEffect(() => {
    // Hide the BottomTabNavigator when the screen is focused
    const hideTabBar = navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({ 
        tabBarStyle: { display: 'none' } 
      });
    });

    // Restore the BottomTabNavigator when the screen is blurred (not focused)
    const showTabBar = navigation.addListener('blur', () => {
      navigation.getParent()?.setOptions({ 
        tabBarStyle: { display: 'flex' } 
      });
    });

    // Clean up the listeners when the component unmounts
    return () => {
      hideTabBar();
      showTabBar();
    };
  }, [navigation]);

  return (
    <View style={styles.container}>

      {/* Notice Content */}
      <View style={styles.noticeContentContainer}>
        <Text style={styles.noticeTitle}>{title}</Text>
        <Text style={styles.noticeContent}>{content}</Text>
      </View>

      {/* Comments */}
      
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={item => item.id}
        style={styles.commentList}
      />

      {/* Comment Input */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          value={newComment}
          onChangeText={setNewComment}
          placeholder="댓글을 입력하세요."
        />
        <TouchableOpacity onPress={addComment} style={styles.addCommentButton}>
          <FontAwesome6 
            name="circle-arrow-up" 
            size={wp('8%')}  // Adjust the size as needed
            color="#007AFF"  // Use white color for the icon
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilePicture: {
    width: wp('7%'),
    height: wp('7%'),
    borderRadius: wp('5%'),
    marginRight: wp('5%'),
  },
  noticeContentContainer: {
    padding: wp('5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noticeTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#333',
  },
  noticeContent: {
    fontSize: wp('4%'),
    color: '#555',
    marginTop: hp('1%'),
  },
  commentList: {
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  commentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  commentProfilePicture: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'), 
    marginRight: wp('3%'),
  },
  commentTextContainer: {
    flex: 1,
    paddingRight: wp('5%'),
  },
  commentUser: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#333',
  },
  commentContent: {
    fontSize: wp('4%'),
    color: '#555',
    marginTop: hp('0.5%'),
  },
  commentDate: {
    fontSize: wp('4%'),
    color: '#999',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('0.5%'),
  },
  commentInput: {
    flex: 1,
    fontSize: wp('4%'),
    color: '#333',
    borderWidth: 0,
    borderColor: '#ccc',
    padding: wp('3%'),
    borderRadius: 5,
  },
  addCommentButton: {
    marginRight: wp('5%'),
    paddingVertical: hp('1%'),
    borderRadius: 5,
  },
});

export default CommunityComment;
