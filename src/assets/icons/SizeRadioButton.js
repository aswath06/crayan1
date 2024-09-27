// SizeRadioButton.js
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../../components/catalog/stylebody'; // Adjust path to your styles

const SizeRadioButton = ({ sizes, selectedSize, setSelectedSize, modalContent }) => {
  return (
    <RadioButton.Group onValueChange={value => setSelectedSize(value)} value={selectedSize}>
      {sizes.map((size, index) => (
        <React.Fragment key={size}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10
            }}
            onPress={() => setSelectedSize(size)}
          >
            <RadioButton value={size} color="#007BFF" />
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontSize: 14,
                color: 'black'
              }}
              selectable={true}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {modalContent.name} ({size})
            </Text>
            <Text
              style={{
                color: selectedSize === size ? '#007BFF' : 'black',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'right',
                minWidth: 60,
                marginRight: 20,
              }}
              selectable={true}
            >
              {modalContent.prices[size]}
            </Text>
          </TouchableOpacity>
          {index < sizes.length - 1 && <View style={styles.divider} />}
        </React.Fragment>
      ))}
    </RadioButton.Group>
  );
};

export default SizeRadioButton;
