import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const InputGroup = props => {
  const [inputItem, setInputItem] = useState('')

  const onInputChange = enteredText => {
    setInputItem(enteredText)
  };

  const onSubmit = () => {
    if (inputItem.length > 0) {
      props.onSubmit(inputItem)
      setInputItem('')
    }
  }

  const onClear = () => {
    props.onClear()
  }

  return (
    <View style={styles.inputGroup}>
      <TextInput
        placeholder="Write something"
        style={styles.textInput}
        onSubmitEditing={onSubmit}
        onChangeText={onInputChange}
        value={inputItem}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="ADD" onPress={onSubmit} />
        </View>
        <View style={styles.button}>
          <Button
            title="CLEAR"
            color="red"
            onPress={onClear}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.65)'
  },
  textInput: {
    flex: 2,
    fontSize: 18,
    marginLeft: 5,
    
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 2,
  },
  button: {
    width: '49%',
  },
})

export default InputGroup
