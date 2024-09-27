
import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Closeicon12 from '../../assets/icons/close';
import Rightarrow1 from '../../assets/icons/righticon';
import SizeRadioButton from '../../assets/icons/SizeRadioButton';
import styles from './stylebody'; 

const ItemModal = ({
  isVisible,
  modalContent,
  toggleModal,
  handleAddToOrder,
  selectedSize,
  setSelectedSize,
  count,
  incrementCount,
  decrementCount,
  totalPrice,
  selectedVariant,
  setSelectedVariant,
  selectedTopping,
  setSelectedTopping,
  isAddItemModalVisible,
  toggleAddItemModal
}) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent1}>
            <Image source={{ uri: modalContent.image }} style={styles.modalImage} />
            <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
              <View style={styles.circleBackground}>
                <Closeicon12 />
              </View>
            </TouchableOpacity>

            <Text style={styles.modalText}>{modalContent.modalText}</Text>
            {modalContent.sizes && modalContent.sizes.length > 0 && (
              <View style={styles.sizesContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  <Text style={{ color: 'grey', fontSize: 13 }}>
                    {modalContent.sizes.join(', ')}
                  </Text>
                  <Text style={{ color: 'grey', fontSize: 13 }}>
                    {`${modalContent.prices['Small']}`}
                  </Text>
                </View>
              </View>
            )}
            <Text style={styles.modalText1}>{modalContent.modalText1}</Text>
            <View style={styles.line} />
            <View style={styles.calorieContainer}>
              <View style={styles.calorieInfo}>
                <Text style={styles.calorieText}>Calories per 100g</Text>
                <Text style={styles.calorieValue}>{modalContent.calories} kcal</Text>
              </View>
              <View style={styles.foodTypeInfo}>
                <Text style={styles.calorieText}>Food type</Text>
                <Text style={styles.calorieValue}>{modalContent.foodtype}</Text>
              </View>
            </View>
            <View style={styles.line} />
            <TouchableOpacity style={styles.addItemButton} onPress={toggleAddItemModal}>
              <Text style={styles.addItemButtonText}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddItemModalVisible}
        onRequestClose={toggleAddItemModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Variants & Add-ons</Text>
            <TouchableOpacity style={styles.closeIcon} onPress={toggleAddItemModal}>
              <View style={styles.circleBackground1}>
                <Rightarrow1 />
              </View>
            </TouchableOpacity>

            <View style={styles.textImageContainer}>
              {modalContent?.image && (
                <Image source={{ uri: modalContent.image }} style={styles.addonImage} />
              )}
              <View style={{ flex: 2 }}>
                <Text style={styles.modalText2}>{modalContent?.modalText1}</Text>
              </View>
            </View>

            <View style={styles.variantsAddOnsContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedVariant === 'Variants (2)' && styles.selectedButton,
                ]}
                onPress={() => setSelectedVariant('Variants (2)')}
              >
                <Text style={[styles.variantsText, selectedVariant === 'Variants (2)' && styles.variantsTextselected]}>
                  Variants (2)
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedVariant === 'Add-ons' && styles.selectedButton,
                ]}
                onPress={() => setSelectedVariant('Add-ons')}
              >
                <Text style={[styles.addOnsText, selectedVariant === 'Add-ons' && styles.addOnsTextselected]}>
                  Add-ons
                </Text>
              </TouchableOpacity>
            </View>

            {selectedVariant === 'Variants (2)' && (
              <View>
                <Text style={{ color: "black", fontWeight: "500", fontSize: 17, marginTop: 13, marginLeft: 20 }}>
                  Quantity
                </Text>
                
                <View style={styles.sizePriceContainer}>
                  <SizeRadioButton
                    sizes={modalContent?.sizes}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    modalContent={modalContent}
                  />
                </View>

                {selectedSize && (
                  <View style={{
                    flexDirection: 'column',
                    backgroundColor: 'white', 
                    padding: 10, 
                    borderRadius: 5, 
                    marginTop: 10 
                  }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                      <Text style={{ color: 'black', fontSize: 18, marginRight: 20 }}>Total Price:</Text>
                      <Text style={{ color: 'black', fontSize: 18 }}>SAR {totalPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                      <View style={[styles.count, {
                        borderWidth: 1,
                        borderColor: 'black',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '35%',
                        justifyContent: 'space-between',
                        borderRadius: 5,
                        height: 50,
                      }]}>
                        <TouchableOpacity onPress={decrementCount}>
                          <Subicon1 style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                        <Text>{count}</Text>
                        <TouchableOpacity onPress={incrementCount}>
                          <Addicon1 style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={[styles.addItemButton1, { height: 52, borderRadius: 5, marginLeft: 10 }]}
                        onPress={handleAddToOrder}
                      >
                        <Text style={styles.addItemButtonText}>Add To Order</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            )}

            {selectedVariant === 'Add-ons' && modalContent.toppings?.length > 0 && (
              <View style={styles.toppingsContainer}>
                <Text style={styles.toppingsTitle}>Toppings:</Text>
                {modalContent.toppings.map((topping, index) => (
                  <View key={index} style={styles.toppingRow}>
                    <CustomRadioButton
                      topping={topping}
                      selectedTopping={selectedTopping}
                      setSelectedTopping={setSelectedTopping}
                    />
                    <Text
                      style={[
                        styles.toppingPrice,
                        { color: selectedTopping?.id === topping.id ? '#007BFF' : 'black' }
                      ]}
                    >
                      {topping.price}
                    </Text>
                  </View>
                ))}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.count, {
                    borderWidth: 1,
                    borderColor: 'black',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '40%',
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    height: 50,
                    marginTop: 5
                  }]}>
                    <TouchableOpacity onPress={decrementCount}>
                      <Subicon1 style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                    <Text>{count}</Text>
                    <TouchableOpacity onPress={incrementCount}>
                      <Addicon1 style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={[styles.addItemButton1, { height: 50, borderRadius: 5, marginLeft: 10 }]}
                    onPress={handleAddToOrder}
                  >
                    <Text style={styles.addItemButtonText}>Add To Order</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ItemModal;
