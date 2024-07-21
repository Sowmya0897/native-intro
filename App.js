/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import Navigation from './src/navigation';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';



const App = () => {

  return (
    <SafeAreaView style={styles.root}>
     {/* <SignInScreen/> */}
     {/* <SignUpScreen/> */}
     {/* <ConfirmEmailScreen/> */}
     {/* <ForgotPasswordScreen/> */}
     {/* <NewPasswordScreen/> */}
     <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 root: {
  flex: 1,
  backgroundColor: '#F9FBFC'
 }
});

export default App;
