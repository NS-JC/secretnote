import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StudyTest = ({ route }) => {
  const { title, content } = route.params || { title: '', content: '' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp('4%'), backgroundColor: '#fff' },
  title: { fontSize: wp('5%'), fontWeight: 'bold', marginBottom: hp('2%') },
  content: { fontSize: wp('4.5%'), color: '#333' },
});

export default StudyTest;
