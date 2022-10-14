import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
export default function App() {
return (
<View style={styles.container}>
<Text style={styles.paragraph}>Setembro Amarelo</Text>
<Card style={styles.texto}>

<Image style={styles.img}source={require('./seet.jpeg')} />

<Text style={styles.paragraph}> 
Mês de prevenção ao suicídio. A cada 45 minutos, um brasileiro tira a própria vida. No mundo, acontece um suicídio a cada 40 segundos: um milhão de vidas que poderiam ser salvas com a abordagem e acolhimento adequados ainda nos primeiros sinais de alerta.
</Text>

<Image style={styles.img}source={require('./set1.jpg')} />

<Text style={styles.paragraph}> 
Não desista, sorria. Você é mais forte do que pensa e será mais feliz do que imagina. 
</Text>

<Image style={styles.img}source={require('./ama1.jpg')} />

<Text style={styles.paragraph}> 
Se você está na base de uma montanha: Suba;
Se você está no meio da montanha: Não desista;
Se você chegou ao topo: peça a Deus que te ensine a voar.
</Text>

</Card>
</View>
);


}
const styles = StyleSheet.create({
container: {
flex: 25,
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: 'yellow',
padding: 25,




},

texto:{
backgroundColor: 'yellow'
},

paragraph: {
margin: 24,
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
color: '',
backgroundColor: 'yellow'
},

img:{
  width:290,
  height: 260,
  alignSelf: 'center'
  

}

});