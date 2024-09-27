import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Dorticons1 from '../../assets/icons/morevert';
import Closeicon12 from '../../assets/icons/close';

import { useNavigation } from '@react-navigation/native';

export default function CatalogAppBar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Catalog</Text>
        <View style={styles.iconsContainer}>
          <Dorticons1 style={styles.icon} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Closeicon12 />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop:10,
    marginBottom: 1, 
    padding: 16, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22, 
    fontWeight: 'bold', 
    marginRight: 20,
    marginLeft:10, 
    flex: 1,
    color:"black", 
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginLeft: 20, 
    marginRight: 20, 
  },
  icon: {
    marginRight: 10, 
  },
});
