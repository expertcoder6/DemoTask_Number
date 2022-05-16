import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {DraxProvider, DraxList} from 'react-native-drax';

const Box = () => {
  const [alphaData, setAlphaData] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <DraxProvider>
      <View style={styles.container}>
        <DraxList
          style={{alignItems: 'center'}}
          data={alphaData}
          numColumns={3}
          scrollEnabled={false}
          renderItemContent={({item}) => (
            <View style={[styles.alphaItem]}>
              <Text style={styles.alphaText}>{item}</Text>
            </View>
          )}
          onItemReorder={({fromIndex, toIndex}) => {
            const newData = alphaData.slice();
            newData.splice(fromIndex, 1, newData.splice(toIndex, 1, newData[fromIndex])[0]);
            setAlphaData(newData);
          }}
          keyExtractor={item => item}
        />
      </View>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  alphaItem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFF'
  },
  alphaText: {
    fontSize: 28,
    fontWeight:'bold'
  },
});

export default Box;
