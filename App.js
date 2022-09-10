import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const BASE_URL = "https://1-server-example.vauxgomes.repl.co";

export default function App() {
  const [login, setLogin] = useState("coisa");
  const [password, setPassword] = useState("coisa");

  const handleSubmit = (e) => {
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.token);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>

      <TextInput
        style={styles.input}
        onChange={(e) => setLogin(e.nativeEvent.text)}
        value={login}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        value={password}
      />

      <Button onPress={handleSubmit} title="Login" color="#000" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "gray",
    width: "80%",
    borderRadius: 5,
    color: "white",
    marginBottom: 10,
  },
});
