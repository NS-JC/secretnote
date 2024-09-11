import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Image , ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import profile_default from '../../img/profile_default.png'

const CommunityComment = ({ route, navigation }) => {
  const { title, content, date, likes: initialLikes } = route.params;
  const [likes, setLikes] = useState(initialLikes);
  const [userLiked, setUserLiked] = useState(false);

  const toggleLike = () => {
    if (userLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setUserLiked(!userLiked);
  };

  const [comments, setComments] = useState([
    { id: '1', profilePicture: profile_default, userId: 'User1', commentContent: 'This is a comment', date: '9/24/19' },
    { id: '2', profilePicture: profile_default, userId: 'User2', commentContent: 'Another comment', date: '9/24/19' },
  ]);

  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData = {
        id: (comments.length + 1).toString(),
        userId: 'CurrentUser',
        commentContent: newComment,
        date: new Date().toLocaleDateString(),
        userProfilePicture: profile_default, // Assign the profile picture for the new comment
      };
      setComments([...comments, newCommentData]);
      setNewComment('');
    }
  };

  const renderHeader = () => (
    <View style={styles.noticeContentContainer}>
      <Text style={styles.noticeTitle}>{title}</Text>
      <Text style={styles.noticeContent}>{content}</Text>
  
      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
          <Icon name={userLiked ? 'heart' : 'heart-o'} size={wp('6%')} color={userLiked ? 'red' : '#333'} />
        </TouchableOpacity>
        <Text style={styles.likeText}>{likes}</Text>
      </View>
    </View>
  );

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
      <FlatList
        data={comments}
        ListHeaderComponent={renderHeader}
        renderItem={renderComment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
      />
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          value={newComment}
          onChangeText={setNewComment}
          placeholder="댓글을 입력하세요."
        />
        <TouchableOpacity onPress={addComment} style={styles.addCommentButton}>
          <FontAwesome6 name="circle-arrow-up" size={wp('8%')} color="#007AFF" />
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
  listContentContainer: {
    paddingBottom: hp('10%'),
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    paddingHorizontal: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  commentTextContainer: {
    flex: 1,
    flexShrink: 1, // Allow text to shrink to avoid overflowing
    paddingRight: wp('2%'), // Add padding to the right side
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
    flexWrap: 'wrap', // Ensure text wraps within its container
  },
  commentDate: {
    fontSize: wp('4%'),
    color: '#999',
    marginLeft: wp('2%'), // Add margin to the left to avoid overlap,
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
  likeContainer: {
    flexDirection: 'row', 
    alignItems: 'center',  
    justifyContent: 'flex-end',  
    marginTop: hp('1%'), 
    right: wp('3%'), 
  },
  likeButton: {
    padding: wp('1%'), 
  },
  likeText: {
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
    color: '#333',
  },
});

export default CommunityComment;
