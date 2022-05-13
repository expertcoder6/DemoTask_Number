import React from 'react';
import Box from './src/Component/Box';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center',backgroundColor:'gray'}}>
      <Box />
    </View>
  );
};

export default App;
