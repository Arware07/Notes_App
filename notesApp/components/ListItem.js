import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'

const ListItem = ({ note }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  )
}

export default ListItem;
const styles = StyleSheet.create({
listItem:{
   borderWidth: 1,
   borderColor: '#000000',
   padding: 10,
   borderRadius:7,
   backgroundColor: "#F8E2D1",
   marginTop: 10,
    }, 
    noteText:{
    fontSize: 17,
    fontWeight: "400",
}
})