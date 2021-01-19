import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../component/Shoes'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: 'red'}]}>•</Text>
          <Text style={[styles.text, { color: '#CEcecf'}]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
            name="filter-list"
            size={24}
            color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />
        <ScrollView>
          <Text style={styles.text}>LANÇAMENTOS</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/tenis1.png')} cost="R$140,90" onClick={() => navigation.navigate('Detail') }>
              Nike Air Max Dia
            </Shoes>
            <Shoes img={require('../../assets/tenis2.png')} cost="R$260,80" onClick={() => navigation.navigate('Detail') }>
              Nike Downshifter 10
            </Shoes>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/tenis3.png')} cost="R$330,90" onClick={() => alert('Clicou')}>
              Nike Squidward Tentacles
            </Shoes>
            <Shoes img={require('../../assets/tenis4.png')} cost="R$225,80" onClick={() => alert('Clicou')}>
              Nike Epic React Flyknit 2
            </Shoes>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/tenis5.png')} cost="R$197,90" onClick={() => alert('Clicou')}>
              Nike Joyryde Run Flyknit
            </Shoes>
            <Shoes img={require('../../assets/tenis6.png')} cost="R$470,80" onClick={() => alert('Clicou')}>
              Nike Ryder
            </Shoes>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2
  }
})