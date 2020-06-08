
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {renderPlayer} from "../util/PlayerUtils";
import {renderFantasy} from "../util/PlayerUtils";
import { Pages } from 'react-native-pages';


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class Player extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     player:  props.navigation.state.params.player
   }

   console.log(this.state.player);

 }


 _renderItem = () => (
   <View style={{flex: 1}}>
   {renderPlayer(this.state.player)}
   {this.state.player.fantasyResponse.length > 0 && renderFantasy(this.state.player.fantasyResponse[0])}
   </View>
 );



  render() {
    return (
       <View style={styles.container}>
        {this._renderItem()}
       </View>
     );
  }
}



//export default createAppContainer(TabNavigator);

export default Player;
