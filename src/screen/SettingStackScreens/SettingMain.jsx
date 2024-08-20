import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingMain = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Text style={styles.optionTitle}>닉네임</Text>
          <Text style={styles.optionSubtitle}>Email: awoefji@gmail.com</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>COIN CENTER</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="star" size={24} color="#FFC107" />
          <Text style={styles.optionTitle}>코인 충전소</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>COMMUNITY</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="whatsapp" size={24} color="#4CAF50" />
          <Text style={styles.optionTitle}>내가 쓴 글</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="bell" size={24} color="#FF5722" />
          <Text style={styles.optionTitle}>알림설정</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="heart" size={24} color="#E91E63" />
          <Text style={styles.optionTitle}>초대하기</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>STUDY HISTORY</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="info-circle" size={24} color="#2196F3" />
          <Text style={styles.optionTitle}>2024.07.07</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="info-circle" size={24} color="#2196F3" />
          <Text style={styles.optionTitle}>2024.07.06</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionContent}>
          <Icon name="info-circle" size={24} color="#2196F3" />
          <Text style={styles.optionTitle}>2024.07.05</Text>
        </View>
        <Icon name="angle-right" size={24} color="#B0B0B0" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#808080',
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flex: 1,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333333',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#808080',
  },
});

export default SettingMain;
