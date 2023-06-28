import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AllNotesScreen from './screens/AllNotesScreen';
import AddNotes from './screens/AddNotes';
import { ScreenType } from './constants/Constants';
import { useState } from 'react';
import BackButton from './components/BackButton';

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  
  let content;
  if(screen===ScreenType.addNote){
    content = <AddNotes/>;
  } 
  else if(screen===ScreenType.allNotes){
    content = <AllNotesScreen/>;
  }
  else if (screen === ScreenType.home){
    content = (<HomeScreen onExit = { (data) => {
      setScreen(data);
    }}
    />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <BackButton onButtonClick={(data) => setScreen(data)}/>
    {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
