import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, 
  FlatList, Alert, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';

const data = [
  { date: '2024-07-01', description: '점심식사', amount: '4400원' },
  { date: '2024-07-03', description: '저녁식사', amount: '4600원' },
  { date: '2024-07-04', description: '점심식사', amount: '4800원' },
  { date: '2024-07-04', description: '저녁 식재료 구입', amount: '3800원' },
  // 데이터 추가
];

const MainScreen = ({ navigation }) => {
  const [newDate, setNewDate] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [entries, setEntries] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);

  const totalAmount = entries.reduce((sum, item) => sum + parseInt(item.amount.replace('원', '')), 0);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.description}</Text>
      <Text style={styles.cell}>{item.amount}</Text>
    </View>
  );

  const addEntry = () => {

    if (!newDate) {
      Alert.alert("입력 오류", "날짜를 입력해 주세요.");
      return;
    }
    if (!newDescription) {
      Alert.alert("입력 오류", "사용내용을 입력해 주세요.");
      return;
    }
    if (!newAmount) {
      Alert.alert("입력 오류", "금액을 입력해 주세요.");
      return;
    }

    setEntries([...entries, { date: newDate, description: newDescription, amount: `${newAmount}원` }]);
    setNewDate('');
    setNewDescription('');
    setNewAmount('');
  };

  const handleFloatingButtonPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddEntry = () => {
    closeModal();
    // 추가 작업 수행
    Alert.alert("메뉴 선택", "내용 추가를 선택했습니다.");
  };

  const handleEditEntry = () => {
    closeModal();
    // 수정 작업 수행
    Alert.alert("메뉴 선택", "내용 편집을 선택했습니다.");
  };

  const handleShareEntry = () => {
    closeModal();
    // 공유 작업 수행
    Alert.alert("메뉴 선택", "공유하기를 선택했습니다.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.totalAmountText}>현재 총 금액: {totalAmount}원</Text>
      </View>
      <View style={styles.middleSection}>
        <View style={styles.topHalf}>
          <Button title="전체보기" onPress={() => navigation.navigate('Total')} />
          <Button title="이번달 사용금액" onPress={() => navigation.navigate('Month')} />
        </View>
      </View>
      <View style={styles.largeSection}>
      <View style={styles.top}>
          <TextInput
            style={styles.input}
            placeholder="날짜"
            value={newDate}
            onChangeText={setNewDate}
          />
          <TextInput
            style={styles.input}
            placeholder="사용내용"
            value={newDescription}
            onChangeText={setNewDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="금액"
            value={newAmount}
            onChangeText={setNewAmount}
            keyboardType="numeric"
          />
          <Button title="등록" onPress={addEntry} />
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>날짜</Text>
          <Text style={[styles.cell, styles.header]}>사용내용</Text>
          <Text style={[styles.cell, styles.header]}>금액</Text>
        </View>
        <FlatList
          data={entries}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.menuItem} onPress={handleAddEntry}>
                <Text style={styles.menuText}>내용 추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleEditEntry}>
                <Text style={styles.menuText}>내용 편집</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleShareEntry}>
                <Text style={styles.menuText}>공유하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
     <TouchableOpacity style={styles.floatingButton} onPress={handleFloatingButtonPress}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1F2EB', // 연한 초록색 파스텔톤 배경색
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9', // 연한 초록색 파스텔톤 배경색
    borderBottomWidth: 1,
    borderBottomColor: '#B2DFDB',
  },
  totalAmountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C', // 초록색 폰트 색상
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  middleSection: {
    flex: 1,
    backgroundColor: '#E8F5E9', // 연한 초록색 파스텔톤 배경색
  },
  topHalf: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D1F2EB', // 연한 초록색 파스텔톤 배경색
  },
  bottomHalf: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#D1F2EB', // 연한 초록색 파스텔톤 배경색
  },
  input: {
    height: 40,
    borderColor: '#B2DFDB',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#E8F5E9',
  },
  largeSection: {
    flex: 8,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    padding: 10,
    backgroundColor: '#E8F5E9', // 연한 초록색 파스텔톤 배경색
  },
  row: {
    marginTop: 15,
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
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#388E3C',
    borderRadius: 30,
    elevation: 8,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 24,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 딤처리 색상
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  menuItem: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});

export default MainScreen;