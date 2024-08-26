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

      <TouchableOpacity style={styles.reviewButton} onPress={() => navigation.navigate('Test')}>
        <Icon name="book" size={wp('5%')} color="#007AFF" style={styles.reviewIcon} />
        <Text style={styles.reviewText}>오답노트 전체 복습하기</Text>
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
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: wp('4%'), backgroundColor: '#F5F5F5' },
  headerTitle: { fontSize: wp('5%'), fontWeight: 'bold' },
  headerOption: { fontSize: wp('4%'), color: '#007AFF' },
  reviewButton: { flexDirection: 'row', alignItems: 'center', padding: wp('4%') },
  reviewIcon: { width: wp('5%'), height: wp('5%'), marginRight: wp('2%') },
  reviewText: { fontSize: wp('4%'), color: '#007AFF' },
  noteItem: { padding: wp('4%'), borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  noteDate: { fontSize: wp('4%'), color: '#888' },
  noteTitle: { fontSize: wp('4.5%'), fontWeight: 'bold', marginTop: wp('2%') },
  noteContent: { fontSize: wp('4%'), color: '#555', marginTop: wp('1%') },
  listContainer: { paddingBottom: wp('10%') },
});

export default StudyMain;
