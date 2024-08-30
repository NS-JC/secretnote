import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NoticesContext } from '../../context/NoticesContext';

const SettingMyContents = ({ navigation }) => {
  const { notices } = useContext(NoticesContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ReadMyContents', { 
        title: item.title, 
        content: item.content, 
        date: item.date 
      })}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <Text style={styles.contentText}>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>광고자리</Text>
      <FlatList
        data={notices}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
  itemContainer: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: wp('3.5%'),
    color: '#888',
  },
  contentText: {
    fontSize: wp('3.8%'),
    color: '#444',
    marginTop: hp('0.5%'),
  },
});

export default SettingMyContents;
