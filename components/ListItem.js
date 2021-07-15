import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from './Card'

const InputGroup = props => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => props.onDelete(props.id)}>
      <Card style={styles.item}>
        <Text style={styles.itemText}>{props.title}</Text>
        <Icon name='remove' size={20} color='red' />
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(218,218,218,0.7)',
    // border: 'none',
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 40,
  },
  itemText: {
    fontSize: 18,
  },
})

export default InputGroup
