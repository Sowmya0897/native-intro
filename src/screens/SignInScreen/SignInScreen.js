import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View
} from "react-native";
import Logo from "../../../assets/pic.jpg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignInScreen = ({ route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userName = route.params?.userNames;
  const passwords = route.params?.passwords;

  const { height } = useWindowDimensions();
  const navigation = useNavigation();


  const onSignInPressed = () => {
    console.warn("Sign In");
    //validate user
    if (username === userName && password === passwords) {
      navigation.navigate("Home");
    }
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
    width: "80%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
