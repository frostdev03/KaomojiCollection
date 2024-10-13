import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  Image,
} from 'react-native';

const App = () => {
  function hello() {
    Alert.alert('Hello bang!');
  }

  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
      <StatusBar backgroundColor={'#282c34'} barStyle={'light-content'} />

      <TouchableOpacity onPress={() => hello()}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          Kaomoji Collection
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => hello()}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1698791133649-b60990e7e6f0?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{
            width: 300,
            height: 300,
            borderRadius: 150,
            margin: 10,
            borderWidth: 2,
            borderColor: '#fff',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
