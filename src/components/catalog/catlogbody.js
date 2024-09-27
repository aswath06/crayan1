import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Starsicon1 from '../../assets/icons/star';
import catalogData from './data/catalogData.json';
import styles from './stylebody';
import { catalogItems, defaultValues } from './constants';
import CatalogModal from './CatalogModal';

const CatalogDetail = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [selectedSize, setSelectedSize] = useState(defaultValues.initialSelectedSize);
  const [totalPrice, setTotalPrice] = useState(defaultValues.initialTotalPrice);
  const [selectedItem, setSelectedItem] = useState('All');
  const [selectedTopping, setSelectedTopping] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAddItemModalVisible, setAddItemModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [count, setCount] = useState(defaultValues.initialCount);
  const [selectedVariant, setSelectedVariant] = useState('Variants (2)');

  const handleAddToOrder = () => {
    if (modalContent && selectedSize) {
      const itemPrice = modalContent.prices[selectedSize];
      const orderDetails = {
        id: modalContent.id,
        name: modalContent.name,
        size: selectedSize,
        count,
        price: itemPrice,
      };
      setOrders(prevOrders => [...prevOrders, orderDetails]);
      console.log('Added to Order:', orderDetails);
      navigation.navigate("Homescreen", { orderDetails: orderDetails });
      toggleAddItemModal();
    } else {
      console.log('Please select a size and ensure modalContent is set.');
    }
  };

  const filteredData = selectedItem === 'All'
    ? catalogData
    : catalogData.filter(item => item.category === selectedItem);

  const toggleModal = (item) => {
    setModalContent(item);
    setModalVisible(!isModalVisible);
    if (isAddItemModalVisible) {
      setAddItemModalVisible(false);
    }
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  };

  const calculateTotalPrice = () => {
    if (selectedSize && modalContent.prices) {
      const price = modalContent.prices[selectedSize];
      if (price) {
        const parsedPrice = parseFloat(price.replace('SAR', ''));
        const newTotal = (parsedPrice * count).toFixed(2);
        setTotalPrice(newTotal);
      } else {
        setTotalPrice('0.00');
      }
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [count, selectedSize, modalContent.prices]);

  useEffect(() => {
    if (modalContent?.sizes?.length > 0) {
      setSelectedSize(modalContent.sizes[0]);
    }
  }, [modalContent]);

  useEffect(() => {
    if (selectedSize && modalContent.prices) {
      calculateTotalPrice();
    }
  }, [selectedSize, modalContent.prices]);

  const toggleAddItemModal = () => {
    setAddItemModalVisible(!isAddItemModalVisible);
    if (!isAddItemModalVisible) {
      setModalVisible(false);
    }
  };

  const renderItem = ({ item }) => {
    const truncatedName = item.name.length > 15 ? item.name.substring(0, 15) + '...' : item.name;
    return (
      <TouchableOpacity
        style={[styles.itemContainer, !item.available && styles.itemUnavailable]}
        onPress={() => item.available && toggleModal(item)}
      >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{truncatedName}</Text>
          <Text style={styles.itemVariants}>{item.variants}</Text>
          {item.status && <Text style={styles.itemStatus}>{item.status}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {catalogItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedItem(item)}
            style={[
              styles.item,
              selectedItem === item && styles.selectedItem,
            ]}
          >
            <View style={[styles.iconTextWrapper, selectedItem === item && styles.selectedText]}>
              {item === 'Favourite' && <Starsicon1 />}
              <Text style={[styles.text, selectedItem === item && styles.selectedText]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No data available</Text>
        </View>
      )}

      <CatalogModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        isAddItemModalVisible={isAddItemModalVisible}
        toggleAddItemModal={toggleAddItemModal}
        modalContent={modalContent}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        totalPrice={totalPrice}
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        handleAddToOrder={handleAddToOrder}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
        selectedTopping={selectedTopping}
        setSelectedTopping={setSelectedTopping}
      />
    </View>
  );
};

export default CatalogDetail;
