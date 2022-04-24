import React,{useState} from 'react'
import { Text, View, Button, StyleSheet, TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Welcome from './screens/Welcome';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Home Screen </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

function DetailsScreen({navigation}) {
  const [name, setName] = useState("Guest")
  
  const TextChangeHandler= (val) =>{
    setName(val);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <View style={styles.button}> 
      <Button  color="#841584" title="Go to Details ... again" onPress={()=> navigation.push('Details')} />
      </View>
      <View style={styles.button}> 
      <Button  color="pink" title="Go to Home" onPress={()=>navigation.navigate('Home')} />
      </View>
      <View style={styles.button}> 
      <Button  color="black" title="Go back" onPress={()=> navigation.goBack()} />
      </View>

      <View style={styles.welcome} > 
      <TextInput placeholder="Enter your Name to see Wlc Msg  " onChangeText={TextChangeHandler}  />
      <Button  color="violet" title="See the Welcome Massage" onPress={()=> navigation.navigate('Welcome',{name})} />
      </View>

      <View style={styles.button}> 
      <Button color="skyblue"
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      </View>
     
   
   
    </View>
  );
}


function AccueilScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Accueil Screen </Text>
    </View>
  )
}

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  button:{
    padding:10,
    margin:5
  },
  welcome:{
    borderColor: "black",
    borderTopEndRadius : 3,
    margin:15,
    padding:10,
    BorderStyle:"Double",
    borderWidth:0.5
 
  }
})