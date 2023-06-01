import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style = {styles.headerContainer}>
      <Text style={styles.headerTitle}>Your Notes</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        width: "100%",
        height: "17%",
        backgroundColor: Platform.OS == "android" ? "#c3e8ff": "gray",
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle:{
        color: Platform.OS === "android" ? "black": "#f4fdf6",
        fontSize: 35,
        fontWeight: "bold",

    },
})