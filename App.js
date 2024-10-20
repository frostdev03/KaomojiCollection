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

const anim = ['kny', 'aot', 'sxf', 'db', 'op', 'fmab', 'sk', 'jjk'];

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#21252b'}}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />
      <FlatList
        data={anim}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: '#282c34',
              paddingTop: 50,
              paddingBottom: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff'}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
