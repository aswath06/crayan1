import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import HomeAppBar1 from '../components/home/homeappbar';
import Itemhome from '../components/home/itemhome';
import Search1 from '../components/home/search';
import Subicon1 from '../assets/icons/minus';
import Addicon1 from '../assets/icons/add';
import Rightarrow2 from '../assets/icons/rightarrow2';

export default function Homescreen({ navigation, route }) {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    console.log("Homescreen mounted");
    if (route.params?.orderDetails) {
      const newOrder = route.params.orderDetails;
      setOrderDetails(prevDetails => {
        const existingItemIndex = prevDetails.findIndex(item =>
          item.name === newOrder.name && item.size === newOrder.size
        );
        if (existingItemIndex > -1) {
          const updatedDetails = [...prevDetails];
          updatedDetails[existingItemIndex].count += newOrder.count;
          return updatedDetails;
        }
        return [...prevDetails, newOrder];
      });
    }
  }, [route.params]);

  const getTotalPrice = () => {
    return orderDetails.reduce((total, item) => {
      const priceValue = parseFloat(item.price.replace(/[SAR\s]/g, '').trim()) || 0;
      return total + (priceValue * item.count);
    }, 0);
  };

  useEffect(() => {
    if (orderDetails.length > 0) {
      console.log("Total price of all items: SAR", getTotalPrice().toFixed(2));
    }
  }, [orderDetails]);

  const handleDecrease = (index) => {
    setOrderDetails(prevDetails => {
      const updatedDetails = [...prevDetails];
      if (updatedDetails[index].count > 1) {
        updatedDetails[index].count -= 1;
      } else {
        updatedDetails.splice(index, 1);
      }
      return updatedDetails;
    });
  };

  const handleIncrease = (index) => {
    setOrderDetails(prevDetails => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index].count += 1;
      return updatedDetails;
    });
  };

  const getTotalItemCount = () => {
    return orderDetails.reduce((total, item) => total + item.count, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <HomeAppBar1 />
          <Search1 />
          <Itemhome />
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeaderLeft}>Item ({orderDetails.length})</Text>
              <Text style={styles.tableHeaderRight}>Qty & Amount (SAR)</Text>
            </View>

            {orderDetails.length === 0 ? (
              <>
                <Image
                  source={{ uri: 'https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=626&ext=jpg&ga=GA1.1.1822889091.1716690332&semt=ais_hybrid' }}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.emptyCartText}>Cart is empty</Text>
                <Text style={styles.scanText}>Scan barcode or add item</Text>
                <Text style={styles.scanText}>from catalog</Text>
              </>
            ) : (
              orderDetails.map((orderItem, index) => {
                const priceValue = parseFloat(orderItem.price.replace(/[SAR\s]/g, '').trim()) || 0;

                return (
                  <View key={index} style={styles.tableRow1}>
                    <View style={styles.itemColumn}>
                      <Text style={styles.tableCell}>{orderItem.name}</Text>
                      <Text style={styles.tableCell}>{orderItem.size}</Text>
                    </View>
                    <View style={styles.amountColumn}>
                      <View style={styles.countContainer}>
                        <TouchableOpacity onPress={() => handleDecrease(index)} disabled={orderItem.count <= 1}>
                          <Subicon1 style={styles.icon} />
                        </TouchableOpacity>
                        <Text style={styles.countText}>{orderItem.count}</Text>
                        <TouchableOpacity onPress={() => handleIncrease(index)}>
                          <Addicon1 style={styles.icon} />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.countText}>
                        {(priceValue * orderItem.count).toFixed(2)}
                      </Text>
                    </View>
                  </View>
                );
              })
            )}
          </View>
        </View>
      </ScrollView>

      {orderDetails.length > 0 && (
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Payment', { orderDetails, totalPrice: getTotalPrice() })}>
          <View style={styles.buttonContent}>
            <View style={styles.items1}>
              <Text style={styles.addItemText}>Item</Text>
              <Text style={styles.addItemText}>{getTotalItemCount()}</Text>
            </View>
            <View style={styles.payementtext}>
              <Text style={styles.buttonText}>View Payment Summary </Text>
              <Rightarrow2 style={{ color: "white", marginRight: 10 }} />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  table: {
    margin: 6,
  },
  tableHeaderLeft: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
    paddingVertical: 5,
    color: "grey",
    marginLeft: 10,
    fontFamily: 'Poppins-Regular'
  },
  tableHeaderRight: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
    paddingVertical: 5,
    color: "grey",
    marginRight: 10,
    
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderColor: '#bbb',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tableRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderColor: '#bbb',
    backgroundColor: 'white',
    borderBottomWidth: 1,

  },
  itemColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  amountColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tableCell: {
    textAlign: 'center',
    color: "black",
    marginTop: 8,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  countText: {
    textAlign: 'center',
    color: "black",
    minWidth: 30,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    width: '90%',
    backgroundColor: '#1064de',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addItemText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  items1: {
    flexDirection: "column",
  },
  payementtext: {
    flexDirection: "row",
  },
  image: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    marginTop: 70,
  },
  emptyCartText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    fontWeight: "500"
  },
  scanText: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
  },
});
