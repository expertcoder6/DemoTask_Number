// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   SafeAreaView,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import {DraxProvider, DraxView} from 'react-native-drax';

// const Box = () => {
//   const [dataArray, setDataArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [firstIndex, setFirstIndex] = useState(null);

//   function handleNumber(item, index) {
//     setSelectedIndex(index);

//     if (firstIndex != null) {
//       let temp = dataArray[firstIndex];
//       dataArray[firstIndex] = dataArray[index];
//       dataArray[index] = temp;
//       setFirstIndex(null);
//       setSelectedIndex(null);
//     } else {
//       setFirstIndex(index);
//     }
//   }

//   return (
//     <View style={styles.Container}>
//       <FlatList
//         numColumns={3}
//         data={dataArray}
//         scrollEnabled={false}
//         renderItem={({item, index}) => (
//           <DraxProvider>
//             <View style={styles.container}>

//               <DraxView
//                 style={styles.draggable}
//                 onDragStart={() => {
//                   console.log('start drag');
//                 }}
//                 payload="world"
//                 onDrag={({fromIndex, toIndex}) => {
//             // const newData = alphaData.slice();
//             // newData.splice(fromIndex, 1, newData.splice(toIndex, 1, newData[fromIndex])[0]);
//             // setAlphaData(newData);
//           }}              >
//              <Text style={[styles.boxtext,{color: selectedIndex == index ? "#FFF" : 'black'}]}>{item}</Text>
//               </DraxView>
             
//             </View>
//           </DraxProvider>

//           // <TouchableOpacity
//           //   style={[
//           //     styles.listView,
//           //     {backgroundColor: selectedIndex == index ? 'green' : '#FFFFFF'},
//           //   ]}
//           //   onPress={() => {
//           //     handleNumber(item, index);
//           //   }}>
//           // </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default Box;



// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin:5,
//   },
//   draggable: {
//       width: 100,
//       height: 100,
//       backgroundColor: 'white',
//       justifyContent:'center',
//       alignItems:'center'
//   },
//   receiver: {
//       width: 100,
//       height: 100,
//       backgroundColor: 'green',
//   },
//   boxtext: {
//         fontSize: 30,
//         fontWeight: 'bold',
//       },
// });

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
