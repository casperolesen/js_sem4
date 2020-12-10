import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const LoginInput = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [distance, setDistance] = useState();

  const usernameInputHandler = (username) => {
    setUsername(username);
  };

  const passwordInputHandler = (password) => {
    setPassword(password);
  };

  const distanceInputHandler = (distance) => {
    setDistance(distance);
  };

  const handleLogin = () => {
    props.onLogin(username, password, distance);
    setUsername("");
    setPassword("");
    setDistance();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={usernameInputHandler}
          value={username}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
          onChangeText={passwordInputHandler}
          value={password}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Distance"
          style={styles.input}
          onChangeText={distanceInputHandler}
          value={distance}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="LOGIN" onPress={handleLogin} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default LoginInput;
