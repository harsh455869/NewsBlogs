import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Linking, Share, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button ,IconButton,TextInput,ActivityIndicator, Modal} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from './Spinner';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default News = ({ name, country,op }) => {
  const [data, setData] = useState([])
  const [Input,setInput]=useState()
const Shares= async(item)=>{
  try {
    await Share.share({
            
      message: item.url,
      url: item.url,
    })}
    
  catch (error) {
    console.error(error)
  }
  
}
const _storeData = async (title,description,urlToImage,url,publishedAt) => {
  let y=first
   
  y.push([title,description,urlToImage,url,publishedAt])
  try {
    await AsyncStorage.setItem(
      'DATA',
      JSON.stringify(y)
    );
    alert('data added')

  } catch (error) {
    alert('error')
    // Error saving data
  }
};
  const [first, setfirst] = useState(name)
const [isLoading, setLoading] = useState(true)
let page=2;



 const End=async()=>{
 setLoading(true)
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${first}&sortBy=publishedAt&page=${page++}&pageSize=5&apiKey=a705d544db97421fbf455103e3142ffd`)
    const json = await response.json();
   setData(data.concat(json.articles))
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
 }
 
  const getMovies = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${first}&sortBy=publishedAt&page=1&pageSize=5&apiKey=a705d544db97421fbf455103e3142ffd`)
      const json = await response.json();
      setData(json.articles);
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  const onPress=(e)=>{
   
    country.navigate('Summary',{title:e.title,description:e.description,urlToImage:e.urlToImage,publishedAt:e.publishedAt,name:e.source.name,content:e.content,url:e.url,country:country,v:true})
  }

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('DATA');
        if (value !== null) {
          // We have data!!
          setInput(JSON.parse(value))
          console.log(value);
          setLoading(false)
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    _retrieveData()
    getMovies();
   
  }, [first]);
 
  const [text, onChangeText] = React.useState();
  
  return (
    <View >
      <View style={{display:'flex',flexDirection:'row',margin:4,paddingBottom:10,marginVertical:5}} >
  <TextInput  left={<TextInput.Icon icon='magnify'/>}
 
 placeholder='Search About Any...'
  style={{height:50,backgroundColor:'white',width:230,marginRight:10,fontFamily:'monospace'}}
     value={text}
      onChangeText={onChangeText}
      
    />
    <Button  onPress={()=>{setfirst(text);
op.setOptions({ title: text })
}} mode='contained' color='darkblue' style={{height:50,width:100,alignContent:'center',justifyContent:'center'}}>Serch</Button>

</View>
      
        <FlatList
       
          data={data}
        
          keyExtractor={(item, index) => (item.description)}
      
     onEndReached={End}
        
         showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.container}>
            <TouchableOpacity
            onPress={()=>onPress(item)}
          >
           <View >
            
            <View><Text style={styles.title}>{item.title}</Text></View>
          <View><Text style={{fontFamily:'serif'}}>{new Date(item.publishedAt).toUTCString()}</Text></View>
            <View >
            <Image
        style={styles.img}
        source={{
          uri: ((item.urlToImage)?(item.urlToImage):('./assets/icon.png')),
        }}
      />
            </View>
            
           </View>
          
              </TouchableOpacity>
              <View style={{flexDirection:'row'}}>
              <Button icon='share' style={{width:'100%'}}  color='darkblue' onPress={()=>Shares(item)}
           >Share</Button>
            </View>
              </View>
          )}
        
        />
     {(isLoading)?<Spinner/>:<View></View>}
    
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex:1,
   borderBottomWidth:0.4,
  justifyContent:'center',
  alignContent:'center',
    elevation:1,
    width:350,
    borderColor:'grey',
    marginVertical:10,
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    margin:5,
    fontFamily:'monospace'
  }
  ,
  img:{
    width:350,
       height:300,

  }
});