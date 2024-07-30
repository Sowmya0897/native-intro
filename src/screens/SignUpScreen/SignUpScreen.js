import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const storeData = async (name,value) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (e) {
      console.log(e)
    }
  };

  const onRegisterPressed = () => {
    storeData("userName", userName);
    storeData("password", password);
    
    console.warn("Successfully Registered");
    // navigation.navigate("ConfirmEmail");
    navigation.navigate("SignIn");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onTermsofUsePressed = () => {
    console.warn("Clicked Terms of Use");
  };
  const onPrivacyPolicyePressed = () => {
    console.warn("Clicked Privacy Policy");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="UserName"
          value={userName}
          setValue={setUserName}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsofUsePressed}>
            Terms of Use{" "}
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyePressed}>
            Privacy Policy{" "}
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontsize: 36,
    fontWeight: "bold",
    color: "#051C60",
    margin: 20,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
