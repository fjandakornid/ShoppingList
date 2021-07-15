import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name='bars' size={23} color='white' />
      <Text style={styles.text}>Shopping List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    height: 50,
    padding: 5,
    backgroundColor: 'rgba(32,32,32, 0.9)'
  },
  text: {
    flex: 2,
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
})

export default Header