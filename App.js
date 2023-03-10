import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground 
      source={require('./assets/background.png')} 
      resizeMode='cover' 
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
