import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Box = () => {
  const [dataArray, setDataArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [firstIndex, setFirstIndex] = useState(null);

  function handleNumber(item, index) {
    setSelectedIndex(index);

    if (firstIndex != null) {
      let temp = dataArray[firstIndex];
      dataArray[firstIndex] = dataArray[index];
      dataArray[index] = temp;
      setFirstIndex(null);
      setSelectedIndex(null);
    } else {
      setFirstIndex(index);
    }
  }

  return (
    <View style={styles.Container}>
      <FlatList
        numColumns={3}
        data={dataArray}
        scrollEnabled={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[
              styles.listView,
              {backgroundColor: selectedIndex == index ? 'green' : '#FFFFFF'},
            ]}
            onPress={() => {
              handleNumber(item, index);
            }}>
            <Text style={[styles.boxtext,{color: selectedIndex == index ? "#FFF" : 'black'}]}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  listView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    margin: 5,
    height: 100,
    alignSelf:'center'
  },
  boxtext: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
