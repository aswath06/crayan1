import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import Svg from "react-native-svg";
import SvgComponent from '../../assets/icons/SvgComponent';
import Closeicon12 from '../../assets/icons/close';
import Rightarrow1 from '../../assets/icons/righticon';
import Addicon1 from '../../assets/icons/add';
import Subicon1 from '../../assets/icons/minus';
import SizeRadioButton from '../../assets/icons/SizeRadioButton';
import styles from './stylebody';
const CatalogModal = ({
  isModalVisible,
  toggleModal,
  isAddItemModalVisible,
  toggleAddItemModal,
  modalContent,
  selectedSize,
  setSelectedSize,
  totalPrice,
  count,
  incrementCount,
  decrementCount,
  handleAddToOrder,
  selectedVariant,
  setSelectedVariant,
  selectedTopping,
  setSelectedTopping,
}) => {
  console.log(modalContent);
  console.log("Food Type:", modalContent.foodtype);

  return (

    <>
      {/* Main Item Modal */}
      <Modal

        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => toggleModal({})}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent1}>
            <Image source={{ uri: modalContent.image }} style={styles.modalImage} />
            <TouchableOpacity style={styles.closeIcon} onPress={() => toggleModal({})}>
              <View style={styles.circleBackground}>
                <Closeicon12 />
              </View>
            </TouchableOpacity>

            <Text style={styles.modalText}>{modalContent.modalText}</Text>

            {modalContent.sizes && modalContent.sizes.length > 0 && (
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: '100%' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: 'grey', fontSize: 13 }}>
                    {modalContent.sizes.join(', ')}
                  </Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: 'black', fontSize: 13, fontWeight: "500" }}>
                    {modalContent.prices['Small']}
                  </Text>
                </View>
              </View>
            )}

            <Text style={styles.modalText1}>{modalContent.modalText1}</Text>
            <View style={styles.line} />

            {modalContent.calories && modalContent.foodtype && (
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: 'grey', fontSize: 13 }}>
                    {`Calories per 100g`}
                  </Text>
                  <Text style={{ color: 'black', fontSize: 15, marginTop: 2 }}>
                    {modalContent.calories} kcal
                  </Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text style={{ color: 'grey', fontSize: 13 }}>
                    {`Food type`}
                  </Text>
                  <Text style={{ color: 'black', fontSize: 15, marginTop: 2 }}>
                    {modalContent.foodtype}
                  </Text>
                </View>
              </View>
            )}
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
              <View style={styles.circleBackground2}>
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
                      <Text style={{ color: 'black', fontSize: 18 }}>Total Price:</Text>
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
                          <Subicon1 style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                        <Text>{count}</Text>
                        <TouchableOpacity onPress={incrementCount}>
                          <Addicon1 style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={[styles.addItemButton1, { height: 52, borderRadius: 5, marginLeft: 10 }]}
                        onPress={() => {
                          handleAddToOrder();
                          toggleAddItemModal();
                        }}
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
                <Text style={styles.toppingsTitle}>Toppings</Text>
                {modalContent.toppings.map((topping, index) => (
                  <View key={index} style={styles.toppingRow}>
                    <TouchableOpacity onPress={() => setSelectedTopping(topping.name)}>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                        <View style={{
                          width: 22,
                          height: 22,
                          borderWidth: 2,
                          borderColor: selectedTopping === topping.name ? '#1165de' : '#000',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: selectedTopping === topping.name ? '#1165de' : 'transparent',
                          marginRight: 5,
                        }}>
                          {selectedTopping === topping.name && (
                            <Svg height="20" width="20">
                              <SvgComponent height="20px" width="20px" />
                            </Svg>
                          )}
                        </View>
                        <Text style={styles.toppingName}>{topping.name}</Text>
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.toppingPrice,
                        {
                          color: selectedTopping === topping.name ? '#1165de' : 'black',
                          fontWeight: selectedTopping === topping.name ? 'bold' : 'bold', // Keep it bold
                        }
                      ]}
                    >
                      
                      {topping.price}
                    </Text>

                  </View>

                ))}
                <Text style={styles.toppingsTitle}>Beverages:</Text>
                {modalContent.beverages?.map((beverage, index) => (
                  <View key={index} style={styles.toppingRow}>
                    <TouchableOpacity onPress={() => setSelectedTopping(beverage.name)}>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                        <View style={{
                          width: 22,
                          height: 22,
                          borderWidth: 2,
                          borderColor: selectedTopping === beverage.name ? '#1165de' : '#000',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: selectedTopping === beverage.name ? '#1165de' : 'transparent',
                          marginRight: 5,
                        }}>
                          {selectedTopping === beverage.name && (
                            <Svg height="20" width="20">
                              <SvgComponent height="20px" width="20px" />
                            </Svg>
                          )}
                        </View>
                        <Text style={styles.toppingName}>{beverage.name}</Text>
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.toppingPrice,
                        {
                          color: selectedTopping === beverage.name ? '#1165de' : 'black',
                          fontWeight: selectedTopping === beverage.name ? 'normal' : 'bold', // Bold when not selected
                        }
                      ]}
                    >
                      {beverage.price}
                    </Text>
                  </View>
                ))}
                <View style={{
                  flexDirection: 'column',
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 10
                }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Total Price:</Text>
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
                      onPress={() => {
                        handleAddToOrder();
                        toggleAddItemModal();
                      }}
                    >
                      <Text style={styles.addItemButtonText}>Add To Order</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};
export default CatalogModal;
