import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Billicon1(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#828282"
      {...props}
    >
      <Path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160zM360-600v-80h240v80H360zm0 120v-80h240v80H360zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480zM240-160h360v-80H200v40q0 17 11.5 28.5T240-160zm-40 0v-80 80z" />
    </Svg>
  )
}

export default Billicon1
