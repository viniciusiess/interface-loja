import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Shoes from '../Shoes'

export default function Footer() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/tenis1.png')} cost='R$140,90'>
              Nike Air Max Dia
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/tenis5.png')} cost='R$197,90'>
              Nike Joyryde Run Flyknit
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/tenis4.png')} cost='R$225,80'>
              Nike Epic React Flyknit 2
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%'
  }
})