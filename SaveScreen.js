import React,{useState,useEffect} from 'react'
import { View,Text,FlatList,Image,StyleSheet ,DevSettings,TouchableOpacity,Share,RefreshControl,ScrollView, Alert,ImageBackground} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import Spinner from './Spinner';

export default function SaveScreen({navigation}) {
  const [first, setfirst] = useState()
  const [loading, setloading] = useState(true)

const Shares= async(item)=>{
  try {
    await Share.share({
            
      message: item,
      url: item,
    })}
    
  catch (error) {
    console.error(error)
  }
  
}
 const _storeData = async () => {

  try {
    let y=[]
    setfirst(y)
    await AsyncStorage.setItem(
      'DATA',
      JSON.stringify(y)
    );
  
    
  } catch (error) {
    alert(error)
    // Error saving data
  }
};
const _removeData=async(item)=>{
  try {
    const result=first.filter((e)=>{return(e!==item)})
    setfirst(result)
  await AsyncStorage.setItem('DATA',JSON.stringify(result))
  
  } catch (error) {
    console.error(error)
  }
  

  
}
useEffect(() => {
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('DATA');
      if (value !== null) {
        // We have data!!
        setfirst(JSON.parse(value))
     
        setLoading(false)
      }
      
    } catch (error) {
      // Error retrieving data
    }
  };
  _retrieveData()
  setTimeout(() => {
    setloading(false)
  }, 1000);
 }, [loading])
 

 

  
  return (
    (loading)?<View style={{flex:1,justifyContent:'center',alignContent:'center',backgroundColor:'white'}}><Spinner/></View>:
    <View style={{padding:5,paddingBottom:35,backgroundColor:'white'}}>
   
   <Button mode='contained' color='darkblue'  onPress={()=>{
  Alert.alert('please confirm','you want to delete all articals?',[{text:'Yes',onPress:_storeData},{text:'No'}])
    
    }}>Clear All</Button>
   
   
    <FlatList
    showsVerticalScrollIndicator={false}
        data={first}
        renderItem={({item})=><View style={styles.container}>

<TouchableOpacity onPress={()=>navigation.navigate('Summary',{title:item[0],description:item[1],urlToImage:item[2],url:item[3],publishedAt:item[4],v:false})}>
          <View style={{display:'flex',flexDirection:'row',padding:10,elevation:10,marginVertical:3,backgroundColor:'white'}}>
        <Image style={styles.img} source={{uri:item[2]}}/>
<View style={{width:170}}>
            <Text style={styles.title}>{item[0]}</Text>
            <Text style={{fontFamily:'serif'}}>{new Date(item[4]).toUTCString()}</Text>
            <View style={{display:'flex',flexDirection:'row',margin:3}}>
           <Button   icon='share' color='darkblue'onPress={()=>Shares(item[3])}></Button>
            <Button icon='delete' color="darkblue" onPress={()=> Alert.alert('Please confirm','you want to delete this artical?',[{text:'Yes',onPress:()=>_removeData(item)},{text:'No'}])}></Button></View>
         
            </View>
         </View>
          
            </TouchableOpacity>
        </View>}
        keyExtractor={item => item[1]}
      />
   </View>    
  )
}
const styles = StyleSheet.create({
  container: {
   
  
  
    elevation:10,
    width:350,
    marginBottom:5

   
    
    
  },
  title:{
    fontWeight:'bold',
    fontSize:15,
    fontFamily:'monospace'
    
  },img:{
    height:150,
    width:150,
    borderRadius:10,margin:5
  }
  
});