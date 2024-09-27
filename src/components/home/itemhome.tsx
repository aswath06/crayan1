import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import Tableicons1 from '../../assets/icons/table';
import Dorticons1 from '../../assets/icons/morevert';
import Joystickicon1 from '../../assets/icons/joystick';
import Profileicon1 from '../../assets/icons/profile';

export default function Itemhome() {
  return (
    <View style={styles.container}>
      <View style={styles.cartSummaryRow}>
        <Text style={styles.cartSummaryTitle}>Cart Summary</Text>
        <View style={styles.iconWithBorder}>
          <Tableicons1 />
        </View>
        <View style={styles.iconWithBorder}>
          <Dorticons1 />
        </View>
      </View>
      <Text style={styles.orderId}>
        <Text style={styles.orderIdLabel}>Order ID:</Text>
        <Text style={styles.orderIdValue}> 000001</Text>
      </Text>
      <View style={styles.tableInfoContainer}>
        <Tableicons1 />
        <Text style={styles.tableInfo}>Table 1 .</Text>
        <Joystickicon1 style={styles.joystickIcon} />
        <Text style={styles.tableInfo}>Sam Richard .</Text>
        <Profileicon1 style={styles.profileIcon} />
        <Text style={styles.tableInfo}>Mark</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    
  },
  cartSummaryRow: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  cartSummaryTitle: {
    fontSize: 20,
    flex: 1,
    fontFamily: 'Poppins'
  },
  iconWithBorder: {
    marginLeft: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 16,
    marginTop: 10,
  },
  orderIdLabel: {
    color: 'gray',
    fontSize: 14,
    fontFamily: 'Poppins.Regular'
    
  },
  orderIdValue: {
    color: 'black',
    fontWeight: 'bold',
  },
  tableInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  joystickIcon: {
    marginHorizontal: 8,
  },
  profileIcon: {
    marginHorizontal: 8,
  },
  tableInfo: {
    fontSize: 13,
  },
  tableHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  headingItem: {
    fontSize: 16,
    color: 'gray',
    flex: 1,
    paddingHorizontal: 8,
  },
  headingOtyAmount: {
    fontSize: 16,
    color: 'gray',
    flex: 1,
    textAlign: 'right',
    paddingHorizontal: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  textSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  cartEmptyText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  greyText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
  },
  amountText: {
    fontSize: 16,
    textAlign: 'right',
  },
});
