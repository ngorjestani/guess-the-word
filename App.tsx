import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import {GuessWordPage} from "./GuessWordPage";
import {ResultPage} from "./ResultSection";

export default function App() {
  return (
      <View style={styles.container}>
        <GuessWordPage />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
