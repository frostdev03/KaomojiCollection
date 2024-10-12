import React, {useState, useEffect} from 'react';
import {View, Text, Button, StatusBar, Image} from 'react-native';

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
          Kaomoji Collection
        </Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./src/images/phone.jpg')}
          style={{
            width: 300,
            height: 200,
            margin: 10,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderColor: '#fff',
            borderWidth: 2,
          }}
        />
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
      </View>
    </View>
  );
};

export default App;
