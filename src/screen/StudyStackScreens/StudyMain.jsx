import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StudyContext } from '../../context/StudyContext';

const StudyMain = ({ navigation }) => {
  const { studyNotes } = useContext(StudyContext);

  const renderNote = ({ item, index }) => {
    const showDate = index === 0 || studyNotes[index - 1].date !== item.date;

    return (
      <TouchableOpacity
        style={styles.noteItem}
        onPress={() => navigation.navigate('Test', { 
          title: item.title, 
          content: item.content, 
          date: item.date 
        })}
      >
        {showDate && <Text style={styles.noteDate}>{item.date}</Text>}
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteContent}>{item.content}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.reviewAllButton} onPress={() => navigation.navigate('Test')}>
        <Icon name="book" size={wp('5%')} color="#007AFF" style={styles.reviewAllIcon} />
        <Text style={styles.reviewAllText}>오답노트 전체 복습하기</Text>
      </TouchableOpacity>

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
  noteItem: { paddingVertical: hp('2%'), paddingHorizontal: wp('4%'), borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  noteDate: { fontSize: wp('4%'), color: '#888' },
  noteTitle: { fontSize: wp('4.5%'), fontWeight: 'bold', color: '#333', marginTop: wp('1%') },
  noteContent: { fontSize: wp('4%'), color: '#555', marginTop: wp('0.5%') },
  listContainer: { paddingBottom: wp('10%') },
});

export default StudyMain;
