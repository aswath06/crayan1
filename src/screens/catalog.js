import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Catalogappbar from '../components/catalog/catalogappbar'
import Catalogbody from '../components/catalog/catlogbody'
import CatalogDetail from '../components/catalog/catlogbody'
import Paymentbtn from '../components/payments/paymentbutton'

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
        <Catalogappbar/>
        <CatalogDetail/>
        <View style={styles.spacer} />
        <Paymentbtn/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#eff3f6",
  },
  spacer: {
    flex: 1,
  },
})
