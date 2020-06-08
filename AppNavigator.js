   import {
    createAppContainer
  }  from 'react-navigation';
   import { createStackNavigator } from 'react-navigation-stack'
   import LandingPage from "./src/screen/LandingPage";
   import Home from "./src/screen/Home";
   import Players from "./src/screen/Players";
   import Player from "./src/screen/Player";
   import Match from "./src/screen/Match";


    const AppNavigator = createStackNavigator({
      LandingPage: {
       screen: LandingPage,
       navigationOptions: ({ navigation }) => ({
         title: 'Select your Competition',
         headerStyle: { backgroundColor: 'silver'},
         headerTitleStyle: { color: "black"}
         })
      },
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.label}`,
        headerStyle: { backgroundColor: 'silver' }
     })
   },
   Players: {
     screen: Players,
     navigationOptions: ({ navigation }) => ({
       title: `${navigation.state.params.label}`,
      headerStyle: { backgroundColor: 'silver' }
    })
  },
  Player: {
    screen: Player,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.player.label}`,
     headerStyle: { backgroundColor: 'silver' }
   })
 },
 Match: {
   screen: Match,
   navigationOptions: ({ navigation }) => ({
     title: `${navigation.state.params.label}`,
    headerStyle: { backgroundColor: 'silver' }
  })
}
 });


  const App = createAppContainer(AppNavigator);

  export default App;
