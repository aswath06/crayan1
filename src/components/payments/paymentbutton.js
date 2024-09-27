import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import Printicons1 from "../../assets/icons/print";

export default function Paymentbtn() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.bottomActions}>
      <TouchableOpacity style={styles.printButton}>
        <Printicons1 />
        <Text style={styles.printButtonText}>Print Bill</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate('Payment')} 
      >
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomActions: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    marginTop: 20,
    paddingBottom: 20,

    
  },
  printButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#007BFF',
    width: '35%',
    paddingVertical: 10,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft:10,
  },
  printButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#007BFF',
    width: '57%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
