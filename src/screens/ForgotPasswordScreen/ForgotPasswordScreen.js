import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {
    const[username, setUsername]= useState('');
  
    const navigation = useNavigation();

    const onSendPressed = () => {
        console.warn("Successfully Registered");
        navigation.navigate('NewPassword');
    }
    
    const onSignInPressed = () => {
      navigation.navigate('SignIn');
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password </Text>
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
      />

      
       
       <CustomButton text="Send" onPress={onSendPressed}/>      

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

export default ForgotPasswordScreen

