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
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1, justifyContent: 'center',backgroundColor:'gray'}}>
      <Box />
    </GestureHandlerRootView>
  );
};

export default App;

