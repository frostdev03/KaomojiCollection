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
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://play-lh.googleusercontent.com/5RNIAuY3AGTmA9-IbfU-YM25GHM8kQ2vlgNwrwF4SOzX5oP8EcjJz_HDKqeHLE6y1g=w240-h480-rw',
            }}
            style={styles.image}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 8,
            color: 'black',
          }}>
          Login
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}>
          Masukkan email dan password
        </Text>
        <TextInput
          value={email}
          style={styles.inputLogin}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.inputLogin}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.btn}>
          <Text
            style={{color: '#000000', textAlign: 'center', fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {backgroundColor: '#000000'}]}>
          <Text
            style={{color: '#fdf668', textAlign: 'center', fontWeight: 'bold'}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 240,
    height: 240,
    borderRadius: 150,
    margin: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  inputLogin: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#fdf668',
    borderWidth: 2,
  },
  btn: {
    backgroundColor: '#fdf668',
    marginTop: 10,
    marginHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default App;
