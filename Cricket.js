import { View, Text } from 'react-native'
import React ,{useState}from 'react'
import WebView from 'react-native-webview'
import Spinner from './Spinner'

export default function Cricket() {
    const [loading, setfirst] = React.useState(true)
  return (<>
    <WebView onLoadEnd={()=>setfirst(false)} source={{uri:'www.cricbuzz.com/cricket-match/live-scores'}}/>
    {(loading)&&<View><Spinner/></View>}
  </>)
}