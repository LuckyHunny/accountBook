import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const data = [
  { date: '2024-07-01', description: '점심식사', amount: '4400원' },
  { date: '2024-07-03', description: '저녁식사', amount: '4600원' },
  { date: '2024-07-04', description: '점심식사', amount: '4800원' },
  // 데이터 추가
];

const MainScreen = ({ navigation }) => {
  const totalAmount = data.reduce((sum, item) => sum + parseInt(item.amount.replace('원', '')), 0);

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
        <Text style={styles.totalAmountText}>현재 총 금액: {totalAmount}원</Text>
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
    backgroundColor: '#D1F2EB', // 연한 초록색 파스텔톤 배경색
  },
  section: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9', // 연한 초록색 파스텔톤 배경색
  },
  totalAmountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C', // 초록색 폰트 색상
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  largeSection: {
    flex: 6,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    padding: 10,
    backgroundColor: '#E8F5E9', // 연한 초록색 파스텔톤 배경색
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#D1F2EB', // 연한 초록색 파스텔톤 배경색
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B2DFDB',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#2E7D32', // 진한 초록색 폰트 색상
  },
  header: {
    fontWeight: 'bold',
    color: '#1B5E20', // 더 진한 초록색 폰트 색상
  },
});

export default MainScreen;