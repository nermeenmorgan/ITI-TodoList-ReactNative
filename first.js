import React from 'react';
import { Button,Image } from 'react-native/types';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import navigation from 

const FirstScreen = ({navigation}) => {
    return (
        <Image source={require("proj\assets\images\intro.png")}></Image>
        <Button
      title="first"
      onPress={() =>
        // navigation.navigate('', {name: 'toSec'})
        navigation.navigate
      }
    />
    );
};

export default FirstScreen;

const ProfileScreen = ({navigation, route}) => {
    return (

    )
  };