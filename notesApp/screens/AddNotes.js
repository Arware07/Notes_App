import { StyleSheet, Text, View, TextInput, Button, Platform,  } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { ScreenType } from '../constants/Constants';

const AddNotes = ({ onSave, onExit }) => {
  const [enterText, setEnterText] = useState("");
  const handleChange = (val) => {
    setEnterText(val);
  };
  const handleClick = () => {
    if(enterText.trim().length > 0){
      onSave(enterText);
      onExit(ScreenType.allNotes);
    }
  };

  return (
    <View style = {styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Your Note</Text>
        <View>
          <TextInput onChangeText={handleChange} style={styles.input}/>
        </View>
        <Button onPress={handleClick} title="Add"/>
      </View>
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  formContainer:{
    backgroundColor: Platform.OS == "android" ? "#f5f5f5": "black",
     marginHorizontal: 10,
     marginVertical: 10,
     padding: 10,
     borderRadius: 20,
     elevation: 2,
     
  },
  title:{
    fontSize: 23,
    fontWeight:'bold',
    textAlign: 'center'
    
  }, 
  input:{
    marginVertical: 10,
    width: '100%',
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 10,
    
  },

})