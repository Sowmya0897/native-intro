import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const[code, setCode]= useState('');
    const[newPassword, setNewPassword]= useState('');
  
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    }
    
    const handleSignIn = () => {
      navigation.navigate('SignIn');
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password </Text>
      <CustomInput 
      placeholder="Code" 
      value={code} 
      setValue={setCode}
      />
      <CustomInput 
      placeholder="Enter Your New Password" 
      value={newPassword} 
      setValue={setNewPassword}
      />

      
       
       <CustomButton text="Submit" onPress={onSubmitPressed}/>      

       <CustomButton
         text="Back to Sign in" 
         onPress={handleSignIn} 
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

export default NewPasswordScreen

