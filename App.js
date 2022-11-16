import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View,Image,Linking} from 'react-native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import ResultScreen from './ResultScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
  import SaveScreen from './SaveScreen';
  
 
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
import { NavigationContainer } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect,useState} from 'react'
const Drawer = createDrawerNavigator();
import News from './News'
import HomeScreen from './HomeScreen';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { Button,IconButton } from 'react-native-paper';
import Spinner from './Spinner';
import Cricket from './Cricket';
import Contactus from './Contactus';
import Quotes from './Quotes';
export default function App() {
const [data, setdata] = useState()
  const [Value, setValue] = useState('')
 function Jk(){
return(<View style={{width:100,height:50}}>
 <Text>hdsflskfj</Text>
</View>)
 }
 let ran=Math.floor((Math.random() * 1600) + 1);
 
  const General=({navigation})=>{
    return(<View style={styles.container}><News country={Value} name='general' op={navigation}/></View>)
  }
  const Business=({navigation})=>{
    return(<View style={styles.container}><News country={Value} name='business' op={navigation}/></View>)
  }
  const Entertainment=({navigation})=>{
    return(<View style={styles.container}><News country={Value} name='entertainment' op={navigation}/></View>)
  }
  const Health=({navigation})=>{
    return(<View style={styles.container}><News country={Value} name='health' op={navigation}/></View>)
  }
  const Science=({navigation})=>{
    return(<View style={styles.container}><News country={Value} name='science' op={navigation}/></View>)
  }
  const  Sports=({navigation})=>{
   
    return(<View style={styles.container}><News country={Value} name='sports' op={navigation}/></View>)
  }
  const Technology=({navigation})=>{
    return(<View style={styles.container}><News country={Value} name='technology' op={navigation}/></View>)
  }
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
    <DrawerItem labelStyle={{fontSize:20,fontWeight:"bold",fontFamily:'serif',textAlign:'center',width:'100%',margin:0}} label='NewsBlogs' />
    <View>
    <View style={{padding:10,backgroundColor:'lightyellow',margin:5,elevation:5,borderRadius:3,borderTopWidth:1,borderBottomWidth:1}}>
      <Text style={{fontSize:20,fontFamily:'serif',fontStyle:'italic'}}>"{Quotes[ran].text}"</Text>
            <Text style={{textAlign:'right',fontStyle:'italic',fontFamily:'monospace'}}>~{Quotes[ran].author}</Text></View>
    </View>
        <DrawerItemList {...props} />
        
       
        
      </DrawerContentScrollView>
    );
  }
  



  function MyDrawer({navigation}) {
    setValue(navigation)
    return (
      <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{drawerItemStyle:{borderBottomWidth:1,margin:0,padding:0,},drawerActiveBackgroundColor:'darkblue',drawerActiveTintColor:'white',drawerActiveBorderBottomColor:'white',drawerLabelStyle:{fontFamily:'serif',fontWeight:'bold',fontSize:15}}}
      useLegacyImplementation
      
    >
        <Drawer.Screen options={{
         
         headerRight:()=><View style={{marginRight:30,display:'flex',flexDirection:'row'}}><IconButton onPress={()=>navigation.navigate('Saved Articals')} style={{height:50,width:50}} accessibilityViewIsModal={true} icon='file'/></View>
         ,headerStyle:{
          borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
      
         },headerTitleStyle:{fontFamily:'serif'}
        }}   name="General" component={General} />
        <Drawer.Screen options={{
         
         headerRight:()=><View style={{marginRight:30}}><IconButton onPress={()=>navigation.navigate("Saved Articals")} style={{height:50,width:50}} accessibilityViewIsModal={true} icon='file'/></View>
         ,headerStyle:{
          borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
         },headerTitleStyle:{fontFamily:'serif'}
        }} name="Business" component={Business} />
        <Drawer.Screen options={{
         
         headerRight:()=><View style={{marginRight:30}}><IconButton onPress={()=>navigation.navigate('Saved Articals')} style={{height:50,width:50}} accessibilityViewIsModal={true} icon='file'/></View>
         ,headerStyle:{
          borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
         },headerTitleStyle:{fontFamily:'serif'}
        }}  name="Entertainment" component={Entertainment} />
        <Drawer.Screen options={{
         
         headerRight:()=><View style={{marginRight:30}}><IconButton onPress={()=>navigation.navigate('Saved Articals')} style={{height:50,width:50}} accessibilityViewIsModal={true} icon='file'/></View>
         ,headerStyle:{
          borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
         },headerTitleStyle:{fontFamily:'serif'}
        }}  name="Health" component={Health} />
        <Drawer.Screen options={{
         
         headerRight:()=><View style={{marginRight:30}}><IconButton onPress={()=>navigation.navigate('Saved Articals')} style={{height:50,width:50}} accessibilityViewIsModal={true} icon='file'/></View>
         ,headerStyle:{
          borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
         },headerTitleStyle:{fontFamily:'serif'}
        }} name="Science" component={Science} />
        <Drawer.Screen options={{
         
         headerRight:()=><View style={{marginRight:30}}><IconButton onPress={()=>navigation.navigate('Saved Articals')} style={{height:50,width:50}} accessibilityViewIsModal={true} icon='file'/></View>
         ,headerStyle:{
          borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
         },headerTitleStyle:{fontFamily:'serif'}
        }} name="Sports" component={Sports} />
        <Drawer.Screen options={{
         
         headerRight:()=><View style={{marginRight:30}}><IconButton onPress={()=>navigation.navigate('Saved Articals')} style={{height:50,width:50}} accessibilityViewIsModal={true} icon='file'/></View>
         ,headerStyle:{
          borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
         },headerTitleStyle:{fontFamily:'serif'}
        }} name="Technology" component={Technology} />
        <Drawer.Screen  options={{headerTitleStyle:{fontFamily:'serif'}}} name="Live Cricket" component={Cricket} />
        <Drawer.Screen options={{headerTitleStyle:{fontFamily:'serif'}}}  name="Saved Articals" component={SaveScreen} />

        <Drawer.Screen options={{headerTitleStyle:{fontFamily:'serif'}}}  name="Contact Us" component={Contactus} />
      </Drawer.Navigator>
    );
  }
 
  
  const [selectedValue, setSelectedValue] = useState("java");
  const [first, setfirst] = useState([])
  const Stack = createNativeStackNavigator();
 
 
  

  return (

  <NavigationContainer>
 <Stack.Navigator initialRouteName="Details">

<Stack.Screen  name="Details" options={{
  
 headerShown:false
 
}} component={MyDrawer} />
<Stack.Screen  name="Summary" options={{headerTitleStyle:{fontFamily:'serif'}}} component={HomeScreen} />
<Stack.Screen options={{
  
  headerShown:false
  
 }}  name="Result" component={ResultScreen} />

<Stack.Screen options={{headerTitleStyle:{fontFamily:'serif'}}} name="Saved Articals" component={SaveScreen}/>



</Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  img:{
    width:300,
       height:300,
       marginVertical:20

  }
});
