import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingComponent from './components/loading.component';
import Navigation from './navigation/navigation';
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up ship.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  return(
    <Provider store={store}>
       <Navigation />
       {/* <LoadingComponent/> */}
       </Provider>)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
