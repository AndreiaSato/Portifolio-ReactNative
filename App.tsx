import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';



const Stack = createStackNavigator();

function Portifolio ({navigation}){
  return(
    <LinearGradient
      colors={['#F5F5F5', '#333333']}
      style={styles.container}
      >
    <View style={styles.container}>
      
      <Image
      source={require('./assets/andreiaFoto.jpg')}
      style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://www.instagram.com/')}>
        <Text style={styles.textButton}><Icon name="instagram" size={20} color="black"/>  Instagram </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://www.linkedin.com/feed/')}>
        <Text style={styles.textButton}><Icon name="linkedin" size={20} color="black" />  Linkedin</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('mailto:satokhouri@gmail.com')}>
        <Text style={styles.textButton}><Icon name="envelope" size={20} color="black" />  E-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://github.com/AndreiaSato')}>
        <Text style={styles.textButton}><Icon name="github" size={20} color="black" />  GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Skills')}>
        <Text style={styles.textButton}> <Entypo name="emoji-happy" size={24} color="gold" />  Skills</Text>
      </TouchableOpacity>
      
    </View>
    </LinearGradient>
  );
}

function Skills ({navigation}){
  return(
    <LinearGradient
    colors={['#F5F5F5', '#333333']}
    style={styles.container}
    >
    <View style={styles.container}>
      
      <Image 
        source={require('./assets/foto2.jpg')}
        style={styles.image}
        />
     
      <View style={{flex:1, alignItems:'flex-start'}}>
      <Text style={styles.skills}>Detecção do Objeto/OpenCv <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>HTML <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> </Text>
        <Text style={styles.skills}>CSS <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>PHP <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>Java <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>Pyton <Icon name="star" size={16} color="gold"/> </Text>
        <Text style={styles.skills}>Java Script <Icon name="star" size={16} color="gold"/> </Text>
      
      <TouchableOpacity style={styles.buttonSkill} onPress={()=> navigation.navigate('Biografia')}>
        <Text style={styles.textButton}>get to know me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSkill} onPress={()=> {
        console.log('Navigating to Biografia');
        navigation.navigate('Portifolio');
        }}>
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
}

function Biografia ({navigation}){
  return(
    <LinearGradient
    colors={['#F5F5F5', '#333333']}
    style={styles.container}
    >
      <View  >
        <Text style={styles.bioText} >
        E aí, pessoal! Eu sou a Andréia, uma entusiasta do desenvolvimento mobile e, pra ser bem honesta, meio obcecada por criar apps bacanas no React Native! 😄 Acabei de entrar nessa jornada e, confesso, cada projeto é um novo desafio que me deixa ainda mais animada.

Curto muito aprender novas tecnologias, sempre que aparece algo novo no mundo da programação, eu piro em testar e ver o que dá pra fazer. Adoro aquele momento de “eureka” quando você descobre uma solução para aquele bug chato que parecia impossível de resolver.

Quando não estou programando, gosto de dar uma pausa e me mexer um pouco, sabe? Sou fã de esportes, seja jogar beach tênis, correr, ou até dar uma caminhada. Acho que isso ajuda a manter a cabeça fresca pra voltar pro código com mais energia.

Além disso, adoro trocar ideia com outros devs, seja em eventos, grupos online ou até tomando um café. Acho que essa troca de conhecimento é o que mais faz a gente crescer como profissional e pessoa. Afinal, a gente nunca sabe tudo, né?

E, claro, nas horas vagas, tô sempre ligado(a) no que tá rolando no mundo da tecnologia, séries, filmes e, de vez em quando, dou uma zapeada nos meus games favoritos. 🎮

Então, é isso aí! Bora seguir aprendendo, criando e, quem sabe, colaborar em algum projeto super legal por aí!
        </Text>
        <TouchableOpacity style={styles.buttonSkillf} onPress={()=> navigation.navigate('Portifolio')}>
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
      </View>

      </LinearGradient>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    //backgroundColor:'#696969',
  },
  button: {
    backgroundColor: '#778899',  // Cor moderna e chamativa
    paddingVertical: 15,  // Mais espaço para facilitar o toque
    paddingHorizontal: 30,
    borderRadius: 30,  // Bordas arredondadas
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',  // Sombras para dar um efeito mais elevado
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,  // Efeito de elevação para Android
  },
  buttonSkill:{
    backgroundColor: '#778899',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 60,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 10 },
    shadowOpacity: 5,
    shadowRadius: 3,
    width: 250, // Definindo a largura do botão
    textAlign:'center',
    alignItems: 'center', // Centralizando o texto
  },
  buttonSkillf:{
    backgroundColor: '#778899',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 50,
    marginLeft:90,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width:10, height: 10 },
    shadowOpacity: 5,
    shadowRadius: 3,
    width: 200, // Definindo a largura do botão
    textAlign:'center',
    alignItems: 'center', 
  },
  textButton: {
    color: '#fff',
    fontSize: 18,  // Tamanho de texto confortável
    fontWeight: '600',  // Leve ênfase no peso da fonte
  },
  image: {
    width:200, // Largura da imagem
    height:250, // Altura da imagem
    //borderRadius: 60, // Tornar a imagem circular
    marginBottom: 50,
  },
  skills:{
    marginVertical:10,
    fontSize:20,
    //color:'white',
  },
  bioText: {
    fontSize: 17,  // Tamanho adequado para o corpo do texto
    fontWeight: '500',  // Peso leve para facilitar a leitura
    color: '#333',  // Cor mais suave para o corpo do texto
    lineHeight: 25,  // Melhorar o espaçamento entre linhas
    textAlign: 'justify',  // Justificar o texto para uma apresentação mais elegante
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Portifolio'>
        <Stack.Screen name="Portifolio" component={Portifolio}/>
        <Stack.Screen name="Skills" component={Skills}/>
        <Stack.Screen name="Biografia" component={Biografia}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
