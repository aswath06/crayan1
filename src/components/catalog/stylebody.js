import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    scrollContainer: {
      paddingHorizontal: 10,
      flexGrow: 0,
    },
    item: {
      padding: 10,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      backgroundColor: '#f9f9f9',
      flexDirection: 'row',
      alignItems: 'center',
  
    },
    textImageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginLeft: 20,
      marginRight: 20,
    },
    selectedItem: {
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000',
    },
    selectedText: {
      color: '#fff',
    },
    flatListContainer: {
      padding: 10,
      flexGrow: 1,
    },
    itemContainer: {
      flex: 1,
      margin: 5,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#ddd',
    },
    itemUnavailable: {
      opacity: 0.35,
    },
    itemImage: {
      width: '100%',
      height: 100,
      resizeMode: 'cover',
    },
    itemInfo: {
      padding: 10,
    },
    itemName: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'black',
    },
    itemVariants: {
      fontSize: 10,
      color: '#666',
    },
    itemStatus: {
      fontSize: 10,
      color: 'red',
      fontWeight: 'bold',
    },
    noDataContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      flex: 1,
    },
    noDataText: {
      fontSize: 16,
      color: '#888',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#eff3f6',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'flex-start',
      width: screenWidth,
      maxHeight: '90%',
      position: 'relative',
      position: 'relative',
      paddingTop: 0,
    },
    modalContent1: {
      backgroundColor: '#eff3f6',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'flex-start',
      width: screenWidth,
      maxHeight: '90%',
      position: 'relative',
      position: 'relative',
      paddingTop: 0, 
    },
    paymentContainer: {
  
      justifyContent: 'flex-end'
    },
    modalImage: {
      width: '110%', 
      height: '30', 
      aspectRatio: 1.5, 
      marginBottom: 10,
      resizeMode: 'cover',
      marginLeft: '-5%', 
      marginRight: '-5%', 
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
      alignSelf: 'flex-start',
      color: "black",
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    modalText: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: 10,
      alignSelf: 'flex-start',
      color: "black",
      marginTop: 10,
      marginBottom: 15,
    },
    modalText1: {
      color: "black",
      marginTop: 10,
      fontSize: 14,
      marginBottom: 15,
      marginTop: 15,
    },
    iconTextWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
  
  
    modalText2: {
      flex: 2,
      fontSize: 14,
      color: 'black',
      marginLeft: 10,
      marginRight: 30,
    },
    sizePriceRow: {
      flexDirection: 'row',
    },
    priceText: {
      flex: 1,
      fontSize: 14,
      color: '#000',
      textAlign: 'right',
    },
    line: {
      height: 1,
      backgroundColor: '#ccc',
      width: '100%',
      marginVertical: 10,
    },
    calorieContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 10,
      marginBottom: 30,
    },
    calorieInfo: {
      alignItems: 'flex-start',
    },
    foodTypeInfo: {
      alignItems: 'flex-end',
    },
    calorieText: {
      color: "grey",
    },
    calorieValue: {
      color: "black",
    },
    icon: {
      marginRight: 5,
    },
    closeIcon: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    circleBackground: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    circleBackground1: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderColor: "grey",
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    circleBackground2: {
      width: 30,
      height: 30,
      borderRadius: 20,
      borderWidth:1,
      borderColor: "black",
      justifyContent: 'center',
      alignItems: 'center',
      color:"black",
  
    },
    addItemButton: {
      backgroundColor: '#1165de',
      padding: 17,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
      width: "100%",
    },
    addItemButton1: {
      backgroundColor: '#007BFF',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
      width: "60%",
    },
  
    addItemButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  
    detailsIconContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    addonImage: {
      flex: 1,
      width: screenWidth * 0.3,
      height: screenWidth * 0.3,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
  
    addonsContainer: {
      backgroundColor: '#007BFF',
      borderWidth: 1,
      borderColor: '#0056b3',
      borderRadius: 5,
      padding: 10,
      marginLeft: 0,
      flex: 1,
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 5,
    },
    sizePriceContainer: {
      marginTop: 15,
      marginBottom: 10,
      marginLeft: 10,
    },
  
    sizeText: {
      flex: 1,
      fontSize: 14,
      flexDirection: 'row',
      color: '#555',
      textAlign: 'left',
    },
    priceText: {
      fontSize: 14,
      color: '#000',
      textAlign: 'right',
      flex: 0,
    },
    divider: {
      height: 1,
      backgroundColor: 'lightgray',
      marginVertical: 5,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      borderRadius: 10,
    },
    checkedCheckbox: {
      width: 14,
      height: 14,
      backgroundColor: 'blue',
    },
    variantsAddOnsContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 5,
      marginRight: 10,
  
  
    },
    variantsText: {
      fontSize: 17,
      fontWeight: '500',
      color: 'black',
      padding: 10,
      paddingHorizontal: 45,
      borderRadius: 5,
      letterSpacing: 1,
      fontweight: "bold",
    },
    variantsTextselected: {
      fontSize: 17,
      fontWeight: '500',
      color: 'white',
      backgroundColor: '#007BFF',
      padding: 10,
      paddingHorizontal: 45,
      borderRadius: 5,
      letterSpacing: 1,
      fontweight: "bold",
  
    },
    addOnsText: {
      color: 'black',
      fontSize: 17,
      fontWeight: '500',
      padding: 10,
      paddingHorizontal: 45,
      borderRadius: 5,
      letterSpacing: 1,
      fontweight: "bold",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "center",
    },
    addOnsTextselected: {
      color: 'white',
      backgroundColor: '#007BFF',
      fontSize: 17,
      fontWeight: '500',
      padding: 10,
      paddingHorizontal: 45,
      borderRadius: 5,
      letterSpacing: 1,
      fontweight: "bold",
    },
    selectedPriceText: {
      fontWeight: 'bold',
      marginTop: 10,
      paddingRight: 20,
    },
    toppingsContainer: {
      marginTop: 10,
      width: '100%',


      Right: 20,
    },
    toppingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15,
      borderBottomColor: '#ccc',
      paddingLeft:20,
    },
    toppingName: {
      color: 'black',
      fontSize: 15,
      marginLeft:10,
      
    },
    toppingPrice: {
      color: 'black',
      fontSize: 15,
      paddingRight: 20,
      
    },
    toppingsTitle: {
      color: "black",
      fontSize: 18,
      fontWeight: '500',
      paddingLeft:20,
    }
  
  });
export default styles;