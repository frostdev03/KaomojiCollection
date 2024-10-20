import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  FlatList,
} from 'react-native';

const anim = ['kny', 'aot', 'sxf', 'db', 'op', 'fmab'];

const App = () => {
  return (
    <View>
      <Button
        title="Login"
        color={'#c9c07b'}
        onPress={() => Alert.alert('Hello world!')}
      />

      <FlatList />
    </View>
  );
};

export default App;
