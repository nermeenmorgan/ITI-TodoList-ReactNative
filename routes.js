import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="first"
          component={FirstScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
        <Stack.Screen name="Fourth" component={FourthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};