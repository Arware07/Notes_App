import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons" 

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
        <Pressable>
        <View  style ={styles.itemButton}>
            
            <Text style={styles.tittle}>Add New Note</Text>
            <Icon style={styles.icon} name='caret-forward'/>
            
        
        </View>
        </Pressable>
      
        <Pressable>
        <View  style ={styles.itemButton}>

            <Text style={styles.tittle}>View Notes</Text>
            <Icon style={styles.icon} name='caret-forward'/>
        
        </View>
        </Pressable>
     
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40,

  },
  itemButton:{
    width: Dimensions.get('window').width - 100,
    height: "50%",
    marginVertical: 20,
    backgroundColor: Platform.OS == "android" ? "#ecf7ff": "black",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
     elevation: 7,
     //The next 4 lines only work on IOS
     shadowOffset:{with: 2, height: 10},
     shadowColor: 'black',
     shadowOpacity: 0.4,
     shadowRadius: 2,
  },
  tittle:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Cursive'

  },
  icon:{
    fontSize: 25,
    paddingTop: 20,

  }

})