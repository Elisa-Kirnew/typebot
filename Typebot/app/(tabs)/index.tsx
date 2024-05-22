import {  StyleSheet, View, Text } from 'react-native';
import { Bubble } from "@typebot.io/react";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olha só que legal o que foi feito</Text>
      <Bubble
      typebot="my-typebot-p9838h1"
      previewMessage={{ message: "Ei posso te ajudar?" }}
      theme={{
        button: {
          backgroundColor: "#9B74B7",
          customIconSrc: "💝",
          size: "large",
        },
        previewMessage: {
          backgroundColor: "#9B74B7",
          textColor: "#FFFFFF",
          closeButtonBackgroundColor: "#598E71",
          closeButtonIconColor: "#4A8BB2",
        },
      }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight:'bold',
    color:'#333',
    marginBottom:20,
  }
});
