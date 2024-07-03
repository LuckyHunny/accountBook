import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const data = [
  { date: '2024-07-01', description: '커피', amount: '3000원' },
  { date: '2024-07-02', description: '점심식사', amount: '8000원' },
  // 데이터 추가
];

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.description}</Text>
      <Text style={styles.cell}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {/* 2:2:6 중 첫번째 2 영역 */}
      </View>
      <View style={styles.section}>
        {/* 2:2:6 중 두번째 2 영역 */}
        <View style={styles.buttonContainer}>
          <Button title="전체보기" onPress={() => navigation.navigate('Total')} />
          <Button title="이번달 사용금액" onPress={() => navigation.navigate('Month')} />
          <Button title="오늘 사용금액" onPress={() => navigation.navigate('Today')} />
        </View>
      </View>
      <View style={styles.largeSection}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>날짜</Text>
          <Text style={[styles.cell, styles.header]}>사용내용</Text>
          <Text style={[styles.cell, styles.header]}>금액</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeSection: {
    flex: 6,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  header: {
    fontWeight: 'bold',
  },
});

export default MainScreen;