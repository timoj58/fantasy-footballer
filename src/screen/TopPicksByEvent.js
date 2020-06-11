
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


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class TopPicksByEvent extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     selections: props.navigation.state.params.selections,
     event: props.navigation.state.params.label
   }

   console.log('calling this');

 }



 _renderItem = ({item}) => (
   <ListItem
     title={item.label}
     titleStyle={styles.listItemSmall}
     containerStyle={styles.container}
     chevron
     subtitle={<View><Text style={styles.listItemTiny}>{item.currentTeam}</Text>{renderTrophies(item)}</View>}
     onPress={() => this.props.navigation.navigate('Player',
       {
         player: item
       })}
     badge={{ value: getScore(item, this.state.event),
              textStyle: { color: 'limegreen', fontSize: 20 },
              containerStyle:{ position: 'absolute',  right: 40, top: 25 },
              badgeStyle: {backgroundColor: "#36454f", borderWidth: 0}}}
     />
 );


  render() {
    return (
       <View style={styles.container}>
       {this.state.loading &&
         <View style={styles.progressContainer}>
         <Progress.Bar
            size={Dimensions.get('window').width/4}
            indeterminate={true}
            color='black'
            height={10}
          //  thickness={20}
            />
          </View>
       }
      {!this.state.loading &&
        <FlatList
          data={this.state.selections}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        }
   </View>
     );
  }
}


function getScore(player, event){

   switch(event){
     case "goals":
     return getCombined(player.fantasyResponse[0].goals).toFixed(2);
     case "assists":
     return getCombined(player.fantasyResponse[0].assists).toFixed(2);
     case "yellow_card":
     return getCombined(player.fantasyResponse[0].yellowCards).toFixed(2);
     case "saves":
     return player.fantasyResponse[0].saves.toFixed(2);
   }

}


//export default createAppContainer(TabNavigator);

export default TopPicksByEvent;
