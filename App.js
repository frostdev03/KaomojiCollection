import React, {useState, useEffect} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#21252b'} />
      <View
        style={{
          backgroundColor: '#21252b',
          paddingTop: 20,
          paddingBottom: 20,
          paddingStart: 10,
          elevation: 5,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Kaomoji
        </Text>
      </View>
    </View>
  );
};

export default App;
