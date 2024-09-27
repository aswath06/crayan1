import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import Backicon1 from '../../assets/icons/back';

export default function Payappbar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.appbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Backicon1 />
        </TouchableOpacity>

        <Text style={styles.pay}>Payment Summary</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'black',
    height: 65,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  pay: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  }
});
