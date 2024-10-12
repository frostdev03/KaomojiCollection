import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Alert} from 'react-native';

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
    </View>
  );
};

export default App;
