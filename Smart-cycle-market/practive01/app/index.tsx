import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {

  console.log("Hello From expo typescript");
  
 

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="gray"/>
    <Text style={styles.textColor}>Hii, I am Ohee.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    backgroundColor: "black",
    height: "100%",
    padding: 10
  },
  textColor:{
    color:"blue"
  }
})