import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import CustomButton from '../../components/CustomInput/CustomButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const index = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const navigation = useNavigation();

  const onSignOutPressed = () => {
    navigation.navigate('SignIn');
}
  const encodedTextingValue = encodeURIComponent(inputValue);
  const handlePress = async () => {
    try {
      const encodedTextingValue = encodeURIComponent(inputValue);
      const response = await axios.get(`http://api.mathjs.org/v4/?expr=${encodedTextingValue}`);
      setResult(response.data);
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 36, alignSelf: 'center' }}> </Text>
      <Text style={{ fontSize: 36, alignSelf: 'center' }}> Welcome Home </Text>
      <Text style={{ fontSize: 20, alignSelf: 'center' }}> </Text>
      <Text style={{fontWeight: 'bold'}}> Give values and expression to do simple math operation </Text>
      <Text> Examples: sin(90 deg), 4 / (1 + 3), 5*8, 9-3</Text>
      <Text style={{ fontSize: 10, alignSelf: 'center' }}> </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding:5,
          paddingHorizontal: 10,
        }}
        placeholder="5*3*8"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Text style={{ fontSize: 24, alignSelf: 'center' }}> </Text>
      <Button title="Submit" onPress={handlePress} />
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>
        {result}
      </Text>

      <CustomButton
         text="Sign out" 
         onPress={onSignOutPressed} 
         type="TERTIARY"
         />

    </View>
  );
};

export default index;