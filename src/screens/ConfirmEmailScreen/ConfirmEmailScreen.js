import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const[code, setCode]= useState('');
  
    const navigation = useNavigation();


    const onConfirmPressed = () => {
        navigation.navigate('Home');
    }
    
    const onSignInPressed = () => {
      navigation.navigate('SignIn');
  }
    const onResendPressed = () => {
        console.warn("Resend code"); 
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your Email </Text>
      <CustomInput 
      placeholder="Enter your confirmation code" 
      value={code} 
      setValue={setCode}
      />

      
       
       <CustomButton text="Confirm" onPress={onConfirmPressed}/>      
        

       <CustomButton
         text="Resend Code" 
         onPress={onResendPressed} 
         type="SECONDARY"
         />

       <CustomButton
         text="Back to Sign in" 
         onPress={onSignInPressed} 
         type="TERTIARY"
         />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
},
title: {
  fontsize:36,
  fontWeight:'bold',
  color: '#051C60',
  margin: 20
},
text:{
  color: 'gray',
  marginVertical: 10,
},
link:{
  color:'#FDB075',
}

});

export default ConfirmEmailScreen

