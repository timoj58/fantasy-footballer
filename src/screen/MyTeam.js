
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, Card, ListItem } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';

import {getCombined} from "../util/PlayerUtils";
import {renderTrophies} from "../util/PlayerUtils";
import {topPicks}  from "../service/PlayerService";


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class MyTeam extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     loading: false,
     competition:  props.navigation.state.params.competition,
     data: [{label: "Not Implemented", currentTeam: "yet"}]
   }

   /*

     so for this.  1 allow user to add / remove players to team to track easily.
     need to load a single player (to do) via cache...

     plus other information to show perhaps?
   */

  // setDataSource(this);
 }


 _renderItem = ({item}) => (
   <ListItem
     title={item.label}
     titleStyle={styles.listItem}
     containerStyle={styles.container}
     subtitle={<View><Text style={styles.listItemTiny}>{item.currentTeam}</Text>{renderTrophies(item)}</View>}
    />
 );



  render() {
    return (
       <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
   </View>
     );
  }
}


//export default createAppContainer(TabNavigator);

export default MyTeam
