import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "../screens/Signup";

// const screens = {
//     Home: Landing,
//     Login : Login,
// }

// const Navigation = createStackNavigator(screens)

const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Landing}
          options={{ title: 'My home', headerShown: false  }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Signin',  headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Signup',  headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default createAppContainer(Navigation);
export default Navigation;
