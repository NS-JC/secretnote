import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StudyContext } from '../../context/StudyContext';

const StudyMain = ({ navigation }) => {
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

  const renderFolder = (folderName, isAddFolder) => {
    return (
      <TouchableOpacity
        style={styles.folder}
        onPress={() => isAddFolder ? null : setSelectedFolder(folderName)}
      >
        <View style={isAddFolder ? styles.addFolderBox : styles.folderBox}>
          <Icon name={isAddFolder ? "plus" : "folder"} size={wp('6%')} color="#E0E0E0" />
        </View>
        <Text style={styles.folderText}>{folderName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.reviewAllButton} onPress={() => navigation.navigate('Test')}>
        <Icon name="book" size={wp('5%')} color="#007AFF" style={styles.reviewAllIcon} />
        <Text style={styles.reviewAllText}>오답노트 전체 복습하기</Text>
      </TouchableOpacity>

      <View style={styles.folderContainer}>
        {renderFolder('폴더1', false)}
        {renderFolder('폴더 만들기', true)}
        {/* Additional folders can be added here */}
      </View>

      <FlatList
        data={studyNotes}
        renderItem={renderNote}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  reviewAllButton: { flexDirection: 'row', alignItems: 'center', padding: wp('4%') },
  reviewAllIcon: { width: wp('5%'), height: wp('5%'), marginRight: wp('2%') },
  reviewAllText: { fontSize: wp('4%'), color: '#007AFF' },
  folderContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: hp('2%') },
  folder: { alignItems: 'center' },
  folderBox: { width: wp('15%'), height: wp('15%'), borderWidth: 1, borderColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' },
  addFolderBox: { width: wp('15%'), height: wp('15%'), borderWidth: 1, borderColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderStyle: 'dashed' },
  folderText: { marginTop: wp('1%'), fontSize: wp('4%'), color: '#333' },
  noteItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: hp('2%'), paddingHorizontal: wp('4%'), borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  noteTextContainer: { flex: 1, marginRight: wp('4%') },
  noteDate: { fontSize: wp('4%'), color: '#888', paddingHorizontal: wp('4%'), paddingVertical: hp('1%') },
  noteTitle: { fontSize: wp('4.5%'), fontWeight: 'bold', color: '#333' },
  noteContent: { fontSize: wp('4%'), color: '#555', marginTop: wp('0.5%') },
  listContainer: { paddingBottom: wp('10%') },
  bookmarkIcon: { marginLeft: wp('2%') },
  bookmarkButton: {padding: wp('2.5%') }, // 클릭 가능한 영역 확장
  
});

export default StudyMain;
