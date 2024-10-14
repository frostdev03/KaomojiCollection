import React, {useState, useEffect} from 'react';
import {View, Text, Image, Switch} from 'react-native';

const App = () => {
  const [lamp, setLamp] = useState(false);
  return (
    <View>
      <Switch value={lamp} onValueChange={() => setLamp(!lamp)} />
    </View>
  );
};

export default App;
