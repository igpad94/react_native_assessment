import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { clearFilter, deleteQR, filterData } from '../actions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function QrList() {
  const QrDataList = useSelector((state) => state.filteredData);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(filterData(text));
  };

  const handleFilter = () => {
    dispatch(clearFilter());
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            QR List
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Filter QR..."
            onSubmitEditing={onSubmit}
          />
          <TouchableOpacity
            onPress={handleFilter}
          >
            <Text style={{ color: '#00B4D8', textDecorationLine: 'underline' }}>
              Clear filter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={QrDataList}
            ListFooterComponent={<View style={{ height: windowHeight * 0.07 }} />}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                  {item.title.length > 45 ? `${item.title.slice(0, 45)}(...)` : item.title}
                </Text>
                <TouchableOpacity onPress={() => dispatch(deleteQR(item.id))}>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    fontFamily: 'Optima',
    alignSelf: 'center',
    color: 'white',
  },
  input: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.55,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    borderColor: 'grey',
    marginBottom: 10,
    alignSelf: 'center',
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Optima',
    width: windowWidth * 0.75,
  },
  itemContainer: {
    backgroundColor: '#00B4D8',
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    marginVertical: 8,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  listContainer: {
    flex: 1,
  },
  inputContainer: {
    width: windowWidth * 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleContainer: {
    paddingTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
    width: windowWidth * 0.3,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#00B4D8',
  },
});
