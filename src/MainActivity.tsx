import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { getHandelAction, getStore } from "./redux/getStore";

import { optionType } from "./redux/counterRedux";

export default function MainActivity() {
  const count = useSelector(getStore());

  const dispatch = useDispatch();

  const handlePress= (userType : optionType)=>{
     dispatch(getHandelAction(userType, null))
  }
  

  console.log("count " + count);
  return (
    <View style={styles.container}>
      <Text>Count is {count}</Text>
      <View style={styles.button}>
        <Button title="increment" onPress={()=>handlePress("increment")} />
      </View>

      <View style={styles.button} >
        <Button title="decrement" onPress={()=>handlePress("decrement")} />
      </View>
      <View style={styles.button} >
        <Button title="reset" onPress={()=>handlePress("reset")} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});
