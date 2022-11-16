import { View, Text ,Image} from 'react-native'

import React from 'react'

const Spinner = () => {
  return (
    <View style={{ 
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
<Image source={require('./Spinner.gif')} style={{height:50,width:50}}/>
    </View>
  )
}

export default Spinner