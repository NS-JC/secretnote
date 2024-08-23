import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NoticesContext } from '../../context/NoticesContext';
import { useNavigation } from '@react-navigation/native';

const CommunityWriting = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleInputRef = useRef(null); // Create a ref for the title input
  const { addNotice } = useContext(NoticesContext);

  const handlePost = () => {
    if (title.trim() && content.trim()) {
      addNotice(title, content);
      Alert.alert('Post Success', 'Your post has been submitted!');
      navigation.goBack();
    } else {
      Alert.alert('Please fill in both the title and content.');
    }
  };

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
    // Set headerRight button inside CommunityWriting
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={handlePost}
          style={{ marginRight: wp('4%') }}
        >
          <Text style={{ color: '#007AFF', fontSize: wp('4.5%') }}>글 올리기</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, title, content]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        ref={titleInputRef} // Attach the ref to the TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.fetchContainer}>
        <TouchableOpacity style={styles.fetchContainer} onPress={() => navigation.navigate('Study')}>
          <Icon name="upload-file" size={wp('5%')} color="#007AFF" />
          <Text style={styles.fetchButtonText}>오답노트 불러오기</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.contentInput}
        placeholder="contents"
        value={content}
        onChangeText={setContent}
        multiline
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  titleInput: {
    height: hp('7%'),
    borderColor: '#ccc',
    borderBottomWidth: 0.5,
    marginBottom: hp('2%'),
    paddingHorizontal: wp('5%'),
    fontSize: wp('5%'),
  },
  fetchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
    paddingHorizontal: wp('2%'),
  },
  fetchButtonText: {
    marginLeft: wp('2%'),
    color: '#007AFF',
    fontSize: wp('4%'),
  },
  contentInput: {
    flex: 1,
    borderColor: '#ccc',
    borderTopWidth: 0.5,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    fontSize: wp('4%'),
    textAlignVertical: 'top', // Align text to the top of the input field
  },
});

export default CommunityWriting;
