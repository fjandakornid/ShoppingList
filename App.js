/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Alert,
  ImageBackground,
} from 'react-native'

import Header from './components/Header'
import InputGroup from './components/InputGroup'
import ListItem from './components/ListItem'

const App: () => React$Node = () => {
  const [items, setItems] = useState([])

  const onSubmit = inputItem => {
    if (inputItem.length > 0) {
      setItems(currentItems => [
        ...currentItems,
        { id: Math.random().toString(), value: inputItem },
      ])
    }
  }

  const onClear = () => {
    setItems([])
  }

  const onDeleteItem = itemId => {
    console.log('delete item!')
    setItems(items.filter(x => x.id !== itemId))
  }

  const createTwoButtonAlert = () => {
    if (items.length > 0) {
      Alert.alert(
        'Clear list',
        'Are you sure you want to delete all the items in the list?',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Yes', onPress: () => onClear() },
        ],
        { cancelable: false }
      )
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground
          source={require('./images/kitchen.jpg')}
          style={styles.backgroundImage}
        >
          <Header />
          <InputGroup onSubmit={onSubmit} onClear={createTwoButtonAlert} />
          <FlatList
            keyExtractor={item => item.id}
            data={items}
            style={styles.scrollView}
            renderItem={itemData => (
              <ListItem
                title={itemData.item.value}
                id={itemData.item.id}
                onDelete={onDeleteItem}
              />
            )}
          />
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingTop: 4,
    marginBottom: 4,
    //marginBottom: 10,
    //opacity: 0.2,
  },
  backgroundImage: {
    // position: 'absolute',
    // left: 0,
    // top: 0,
    width: '100%',
    height: '100%',
  },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
})

export default App
