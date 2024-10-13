import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'justify',
          fontSize: 15,
          color: '#f39003',
          marginTop: 10,
          marginStart: 15,
          marginEnd: 15,
          // letterSpacing: 20,
          // lineHeight: 5,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra
        vestibulum sem, sed lacinia enim consequat in. Quisque vitae diam et
        ligula ultrices maximus. Nam sem lectus, imperdiet vitae rhoncus nec,
        feugiat vitae quam. Aenean dapibus dapibus mi, id tincidunt sem
        ullamcorper ut. Fusce pharetra tempus mi nec malesuada. Cras sit amet
        rutrum purus. Pellentesque ut efficitur dolor, sed lobortis dolor. Nulla
        commodo est sed turpis egestas, et suscipit metus cursus. Nam diam quam,
        aliquet non felis laoreet, sodales lacinia turpis. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Maecenas nec est vitae justo tristique commodo sed nec nisi. Nam
        hendrerit rhoncus turpis, vel aliquet turpis molestie ac. Mauris auctor
        metus id massa consectetur, at tempus risus placerat. Integer malesuada
        purus enim, ut mollis lectus eleifend in.
      </Text>
      <Text
        style={{
          marginStart: 40,
          textAlign: 'justify',
        }}>
        Deskripsi
      </Text>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#981309',
          borderRadius: 9,
        }}>
        {/* <Button></Button> */}
      </View>
    </View>
  );
};

export default App;
