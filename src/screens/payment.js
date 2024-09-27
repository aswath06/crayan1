import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Payappbar from '../components/payments/payappbar'
import Deleteicon1 from '../assets/icons/delete'
import Billicon1 from '../assets/icons/bill'
import Notesicon1 from '../assets/icons/notes'
import Accountsicons1 from '../assets/icons/accounts'
import Ticketsicons1 from '../assets/icons/ticket'
import Percentageicon1 from '../assets/icons/percentage'
import Printicons1 from '../assets/icons/print'


export default function Paymentscreen({ route }) {
  const { totalPrice } = route.params || {totalPrice: 0}
  return (
    <SafeAreaView>
      <View>
        <Payappbar />
        <View style={styles.paymentsummary}>
          <View style={{ height: "58%" }}>
            <View style={styles.Paydetailscss}>
              <View style={styles.paydetailsstyle}>
                <Text style={styles.text}>Order ID:</Text>
                <Text style={styles.values}> 123456789</Text>
              </View>
              <View style={styles.rigth}>
                <Billicon1 />
                <Text style={styles.nametext}> Ashwin</Text>
              </View>
            </View>
            <View style={styles.Paydetailscss}>
              <View style={styles.paydetailsstyle}>
                <Text style={styles.text}>Sub total</Text>
              </View>
              <View style={styles.rigth}>
                <Text style={styles.valuestext}>SAR {totalPrice.toFixed(2)}</Text>
              </View>
            </View>
            <View style={styles.Paydetailscss}>
              <View style={styles.paydetailsstyle}>
                <Text style={styles.text}>Discounts</Text>
                <Deleteicon1 />
              </View>
              <View style={styles.rigth}>
                <Text style={styles.valuestext1}>SAR 0</Text>
              </View>
            </View>
            <View style={styles.Paydetailscss}>
              <View style={styles.paydetailsstyle}>
                <Text style={styles.text}>Taxable amount</Text>
              </View>
              <View style={styles.rigth}>
                <Text style={styles.valuestext}> SAR 0</Text>
              </View>
            </View>
            <View style={styles.Paydetailscss}>
              <View style={styles.paydetailsstyle}>
                <Text style={styles.text}>Total tax</Text>
              </View>
              <View style={styles.rigth}>
                <Text style={styles.valuestext}> SAR 0</Text>
              </View>
            </View>

            <View
              style={{
                height: 1.5,
                backgroundColor: 'grey',
                marginVertical: 12,
                marginHorizontal: 20,
                marginTop: 30,
              }} />
            <View style={styles.Paydetailscss}>
              <View style={styles.paydetailsstyle}>
                <Text style={styles.text}>Grand total</Text>
              </View>
              <View style={styles.rigth}>
                <Text style={styles.valuestext2}>SAR {totalPrice.toFixed(2)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomdetails}>
            <View
              style={{
                height: 1.5,
                backgroundColor: 'grey',
                marginVertical: 5,
                marginHorizontal: 20,
                marginTop: 30,
              }} />
            <View style={styles.bottomarea}>
              <Notesicon1 />
              <Text style={styles.addnotecss}>Add notes</Text>
            </View>
            <View
              style={{
                height: 1.5,
                backgroundColor: 'grey',
                marginVertical: 12,
                marginHorizontal: 20,
                marginTop: 30,
              }} />
            <View style={styles.bottombuttons}>
              <View style={styles.bottombuttonsclass}>
                <Accountsicons1 />
                <Text style={styles.textbutton}>Customer</Text>
              </View>
              <View style={styles.bottombuttonsclass}>
                <Ticketsicons1 />
                <Text style={styles.textbutton}>Coupon</Text>
              </View>
              <View style={styles.bottombuttonsclass}>
                <Percentageicon1 />
                <Text style={styles.textbutton}>Discounts</Text>
              </View>
            </View>
            <View
              style={{
                height: 1.5,
                backgroundColor: 'grey',
                marginVertical: 12,
                marginHorizontal: 20,
                marginTop: 30,
              }} />
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                marginHorizontal: 10,
                marginVertical: 24,
              }}>
              <TouchableOpacity style={styles.box1}>
                <Printicons1 />
                <Text style={styles.text7}>Print Bill</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box2}>
                <Text style={styles.text6}>Proceed Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  Paydetailscss: {
    paddingLeft: 15,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  rigth: {
    paddingRight: 20,
    flexDirection: 'row',
  },
  paydetailsstyle: {
    flexDirection: "row",
    alignContent: 'flex-start'
  },
  text: {
    color: "grey",
    fontSize: 18,
    fontWeight: "500",
  },
  values: {
    color: "black",
    fontSize: 18,
  },
  nametext: {
    color: "grey",
    fontSize: 18,
  },
  valuestext: {
    fontWeight: "400",
    fontSize: 19,
  },
  valuestext1: {
    fontWeight: "500",
    fontSize: 18,
    color: "green",
  },
  valuestext2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  addnotecss: {
    color: "#003366",
    fontSize: 25,
    fontWeight: "600"
  },
  bottomarea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    gap: 10,
  },
  bottombuttons: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  bottombuttonsclass: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    gap: 1,
    borderRadius: 10,
  },
  textbutton: {
    fontSize: 15,
    color: "black",
    fontWeight: "500"
  },
  box1: {
    width: '32%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderColor: 'rgb(18, 99, 223)',
    borderWidth: 1.5,
    gap: 5,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  box2: {
    width: '65%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'rgb(18, 99, 223)',
    gap: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text6: {
    color: 'white',
    fontWeight: '800',
    fontSize: 19,
    fontFamily:''
  },
  text7: {
    color: 'rgb(18, 99, 223)',
    fontWeight: '900',
    fontSize: 15,
  },
})