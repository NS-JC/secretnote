import React, { useState, useEffect, useRef  } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CommunityWriting = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleInputRef = useRef(null); // Create a ref for the title input

  useEffect(() => {
    // Focus on the title input field when the component is mounted
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

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
