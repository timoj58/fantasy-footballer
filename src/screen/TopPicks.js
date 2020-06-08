
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {renderPlayerSpecific} from "../util/PlayerUtils";


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class TopPicks extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     loading: false,
     topPicks: [
       {label: "Callum Wilson", event: "goals"},
       {label: "Ryan Fraser", event: "assists"}
     ]
   }

 }


 _renderItem = ({item}) => (
    renderPlayerSpecific(item)
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
          data={this.state.topPicks}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          />}
   </View>
     );
  }
}



//export default createAppContainer(TabNavigator);

export default TopPicks;
