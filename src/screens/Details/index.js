import React from 'react'
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'


export default function Details(){

  const routes = useRoute();
    return(
            <View>
          <Text>{routes.params.titulo}</Text>
          <Text>{routes.params.nota}</Text>
          <Image style={{height:600,widht:100}} source ={require(`../../Img/${routes.params.imagem}`)} />

            </View> 
    
        )


}
