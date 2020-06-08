import React from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import { Dimensions, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Icon, Tile } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Teams from './Teams';
import TopPicks from './TopPicks';
import Matches from './Matches';

import {styles} from './Styles';

//const Tab = createBottomTabNavigator();

class Home extends React.Component {
  constructor(props) {
   super(props);

  }
}


const TabNavigator = createBottomTabNavigator({
  TopPicks: TopPicks,
  Matches: Matches,
  Teams: Teams
},
{
   defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ focused, horizontal, tintColor }) => {
       const { routeName } = navigation.state;
       if (routeName === 'TopPicks') {
         iconName = `trophy`;
         // Sometimes we want to add badges to some icons.
         // You can check the implementation below.
       } else if (routeName === 'Matches') {
         iconName = `calendar-check-o`;
       }else if (routeName === 'Teams') {
         iconName = `group`;
       }

       // You can return any component that you like here!
      // return {{ name: iconconfiguration for a stack navigator, we'll learn how to configure those later.

  //  The casing of the route name doesn't matter -- you can use lowercase home or capitalized Home, it's up to you. Name, type: 'font-awesome', size: iconSize, color: 'silver' }};

       return <Icon name={iconName} type={'font-awesome'} size={25} color={tintColor} />;
     },
   }),
   tabBarOptions: {
     activeTintColor: 'tomato',
     inactiveTintColor: '#36454f',
     style: {
   backgroundColor: 'silver',
   height: 50
     },
   },
 });


export default createAppContainer(TabNavigator);
