import React from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

const About = (props) => {
  return (
    <Modal visible={props.visible}>
      <Text>
        {"\n"}
        {"\n"}
        {"App created by Casper Kruse Olesen."}
        {"\n"}
        {"School mail: cph-co130@cphbusiness.dk"}
      </Text>
      <View style={styles.button}>
        <Button title="BACK" color="red" onPress={props.onBack} />
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

export default About;
