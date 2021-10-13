import React, {useState} from 'react'
import { StyleSheet, Text, SafeAreaView,} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as Speech from 'expo-speech'


export default function App ()
//array de frases - fonte: https://www.pensador.com/autor/carlos_drummond_de_andrade/
const frases = [
  "Cada nova geração de computadores desmoraliza as antecedentes e seus criadores.",
  "Perder tempo em aprender coisas que não interessam priva-nos de descobrir coisas interessantes.",
  "A amizade é um meio de nos isolarmos da humanidade cultivando algumas pessoas.",
  "ser feliz sem motivo é a mais autêntica forma de felicidade.",
]

function falar() {
  let frase = frases[parseInt(Math.random() * frases.length)]  //Obtemos um valor randômico do array  
  Speech.speak(frase, { language: 'pt' })    //definimos o idioma para falar
}
  
function parar() {    
   Speech.stop()   
} 


return(
<SafeAreaView style={styles.Principal}>
  <Text style={styles.Titulo}>
    <FontAwesome name="comment-o" size={50} /> &nbsp; Fala as frases
  </Text>
   <FontAwesome.Button name="volume-up" backgroundColor="#0275d8"
       onPress={falar}   style={styles.Botao} >Ouvir frase</FontAwesome.Button> 
  <FontAwesome Button name="stop-circle"  backgroundColor="#d9534f"
        onPress={parar}   style={styles.Botao} >Parar</FontAwesome.Button> 

   
</SafeAreaView>

)

const styles = StyleSheet.create({
  Principal: {    
            flex: 1,    
            flexDirection: 'column',    
            justifyContent: 'space-around',    
            alignItems: 'center'    
            },    
  Titulo: {    
            fontSize: 30,    
            color: '#1a237e' /* indigo */    
          },    
   Botao: {    
            height: 50,    
            borderRadius: 10,    
            marginLeft: 5,    
            width: 200    
           },    
  Imagem: {    
           height: 400,    
           resizeMode: 'center'    
          }   
});