import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { AppLoading } from 'expo';

export default function App() {

  let [fontsLoaded, error] = useFonts ({
    Oswald_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  
  } else {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Applying custom fonts with expo</Text>
        <Text style={{fontSize: 32, fontFamily: 'Oswald_400Regular'}}>Oswald 400 Regular</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
