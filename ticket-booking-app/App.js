import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Seats from './screens/Seats';
import { createTables } from './database/db';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    createTables();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={Home} />
        <Stack.Screen name="Seats" component={Seats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}