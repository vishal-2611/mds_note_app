import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Splash from './src/Screen/Splash';
import Home from './src/Screen/Home';
import {Provider} from 'react-redux';
import configureStore from './src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import CreatePost from './src/Screen/CreatePost';
let {store, persistor} = configureStore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreatePost"
              component={CreatePost}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
