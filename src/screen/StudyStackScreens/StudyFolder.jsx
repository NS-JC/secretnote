import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StudyContext } from '../../context/StudyContext';

const StudyFolder = ({ navigation }) => {
  const { studyNotes, toggleBookmark, bookmarks } = useContext(StudyContext);

  const [selectedFolder, setSelectedFolder] = useState(null);

  const renderNote = ({ item, index }) => {
    const showDate = index === 0 || studyNotes[index - 1].date !== item.date;

    return (
      <View>
        {showDate && <Text style={styles.noteDate}>{item.date}</Text>}
        <TouchableOpacity
          style={styles.noteItem}
          onPress={() => navigation.navigate('Test', { 
            title: item.title, 
            content: item.content, 
            date: item.date 
          })}
        >
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteContent}>{item.content}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleBookmark(item.id)} style={styles.bookmarkButton}>
            <Icon 
                name="bookmark" 
                size={wp('5%')} 
                color={bookmarks.includes(item.id) ? '#007AFF' : '#E0E0E0'} 
                style={styles.bookmarkIcon} 
              />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={studyNotes}
        renderItem={renderNote}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  noteItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: hp('2%'), paddingHorizontal: wp('4%'), borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  noteTextContainer: { flex: 1, marginRight: wp('4%') },
  noteDate: { fontSize: wp('4%'), color: '#888', paddingHorizontal: wp('4%'), paddingVertical: hp('1%') },
  noteTitle: { fontSize: wp('4.5%'), fontWeight: 'bold', color: '#333' },
  noteContent: { fontSize: wp('4%'), color: '#555', marginTop: wp('0.5%') },
  listContainer: { paddingBottom: wp('10%') },
  bookmarkIcon: { marginLeft: wp('2%') },
  bookmarkButton: {padding: wp('2.5%') }, // 클릭 가능한 영역 확장
});

export default StudyFolder;
