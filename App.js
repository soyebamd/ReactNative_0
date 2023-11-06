import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/HomeScreen';

export default function App() {
  return (
    <View style={{ flex:1 }}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}