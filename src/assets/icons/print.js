import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet, View } from 'react-native';

function Printicons1({ style, ...props }) {
  return (
    <View style={[styles.container, style]}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#007BFF"
        {...props}
      >
        <Path d="M720-680H240v-160h480v160zm0 220q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460zm-80 260v-160H320v160h320zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160z" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight:10,
  },
});

export default Printicons1;
