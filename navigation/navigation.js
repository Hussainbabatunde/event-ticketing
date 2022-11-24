import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import Homepage from "../screens/homepage";
import TrendingEvent from "../screens/TrendingEvent";

// const screens = {
//     Home: Landing,
//     Login : Login,
// }

// const Navigation = createStackNavigator(screens)

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }



export  function Sidebar() {
  return (
      <Drawer.Navigator initialRouteName="Dashboard"  screenOptions={{
        headerShown: true,
        headerTransparent:true
      }} >
        <Drawer.Screen name="Dashboard" options={{ headerTitle:"" }} component={Dashboard}/>
      </Drawer.Navigator>
  );
}

export function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Sidebar"
    screenOptions={{
      tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',
      tabBarShowLabel: false,
    }} >
      {/* <Tab.Screen name="Navigation"  options={{
   tabBarStyle: { display: "none" },headerShown: false, tabBarLabel: "", tabBarIconStyle: { display: "none" }
}} component={Navigation} /> */}
        {/* <Tab.Screen name="Dashboard" component={Dashboard} /> */}
        {/* <Tab.Screen
          name="Sidebar"
          component={Sidebar}
          options={{ title: 'Sidebar', tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',  headerShown: false, tabBarIcon: ({focused}) => {
            return <Ionicons name="ios-home" size={30} color={focused ? "#488265" : "rgba(72, 130, 101, 0.5)"} />
            },
         }}
        /> */}
        <Tab.Screen
          name="Eventhome"
          component={Homepage}
          options={{ title: 'Eventhome', tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',  headerShown: false, tabBarIcon: ({focused}) => {
            return <Ionicons name="ios-home" size={30} color={focused ? "rgb(116,131,237)" : "rgb(255,255,255)"} />
            },
         }}
        />
        
      </Tab.Navigator>
  );
}

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
          name="Dashboard"
          component={TabNavigation}
          options={{ title: 'Signin',  headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Signup',  headerShown: false }}
        />
        <Stack.Screen
          name="TrendingEvent"
          component={TrendingEvent}
          options={{ title: 'Trending Event',  headerShown: false }}
        />
        
        {/* <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ title: 'TabNavigation',  headerShown: false }}
        /> */}
      </Stack.Navigator>
      </NavigationContainer>
  );
}



// export default createAppContainer(Navigation);
export  default Navigation;
