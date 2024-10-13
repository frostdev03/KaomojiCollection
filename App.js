import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';

let saldo = 100000;

const App = () => {
  const [saldoSaya, setSaldoSaya] = useState(100000);

  function hitungDiskon() {
    let perhitungan;
    perhitungan = saldoSaya - 1000;
    setSaldoSaya(perhitungan);
    // saldo = saldo - 10000;
    // Alert.alert('saldo saya ' + saldo);
  }

  return (
    <View>
      <Text>{saldoSaya}</Text>
      <TouchableOpacity onPress={() => hitungDiskon()}>
        <Text>Hitung Diskon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
