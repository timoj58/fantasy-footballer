
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, Card, ListItem } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {renderPlayerSpecific} from "../util/PlayerUtils";


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class Match extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     loading: false,
     match: [
     {event: "goals",
        players: [{label: "Callum Wilson"}]
      },
      {event: "assists",
         players: [{label: "Ryan Fraser"}]
       },
      {event: "yellow cards",
           players: [{label: "Jefferson Lerma"}]
      }
     ]
   }

 }


 _renderItem = ({item}) => (
    renderPlayerSpecific(item)
 );

 _renderEvent = ({item}) => (
   <ListItem
     title={item.event}
     titleStyle={styles.titleListItem}
     containerStyle={styles.container}
     subtitle={
       <FlatList
         data={item.players}
         renderItem={this._renderItem}
         keyExtractor={(item, index) => index.toString()}
       />
     }
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
          data={this.state.match}
          renderItem={this._renderEvent}
          keyExtractor={(item, index) => index.toString()}
        />
        }
   </View>
     );
  }
}



//export default createAppContainer(TabNavigator);

export default Match;
