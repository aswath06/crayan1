import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg from 'react-native-svg'; // Make sure you have this installed
import SvgComponent from './SvgComponent'; // Assuming SvgComponent is in the same folder

const CustomCheckbox = ({ size, price, selectedSize, setSelectedSize }) => {
  const isChecked = selectedSize === size;

  return (
    <TouchableOpacity onPress={() => setSelectedSize(size)}>
      <View style={styles.sizePriceRow}>
        <View
          style={{
            width: 22,
            height: 22,
            borderWidth: 2,
            borderColor: isChecked ? 'blue' : '#000',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isChecked ? 'blue' : 'transparent',
            marginRight: 10,
          }}
        >
          {isChecked && (
            <Svg height="20" width="20">
              <SvgComponent height="20px" width="20px" />
            </Svg>
          )}
        </View>

        <Text
          style={[
            styles.sizeText,
            {
              color: isChecked ? 'blue' : 'black',
              marginRight: 'auto',
            },
          ]}
        >
          {size}
        </Text>

        <Text
          style={[
            styles.priceText,
            {
              color: isChecked ? 'blue' : 'black',
            },
          ]}
        >
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sizePriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sizeText: {
    fontSize: 16,
  },
  priceText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CustomCheckbox;
