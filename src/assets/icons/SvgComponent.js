import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="10px"
      viewBox="0 -960 960 960"
      width="10px"
      fill="white"
      {...props}
    >
      <Path d="M382-240L154-468l57-57 171 171 367-367 57 57-424 424z" />
    </Svg>
  );
}

export default SvgComponent;
