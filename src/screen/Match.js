
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, Card, ListItem, Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';

import {getCombined} from "../util/PlayerUtils";
import {renderTrophies} from "../util/PlayerUtils";
import {matchSelections}  from "../service/PlayerService";
import {averageRatingIndicator} from "../util/PlayerUtils";
import {averageRatingIndicatorColor} from "../util/PlayerUtils";


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class Match extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     loading: true,
     competition:  props.navigation.state.params.competition,
     home:  props.navigation.state.params.home,
     away:  props.navigation.state.params.away,
     data: []
   }

  // setDataSource(this);

 }


 _renderItem = ({item}) => (
   <ListItem
   title={item.label}
   titleStyle={styles.listItemSmall}
     containerStyle={styles.container}
     subtitle={<View><Text style={styles.listItemTiny}>{item.currentTeam}</Text>{renderTrophies(item)}</View>}
     badge={{ value: item.fantasyEventScore.toFixed(2),
              textStyle: { color: 'limegreen', fontSize: 16 },
              containerStyle:{ position: 'absolute',  right: -4, top: 25 },
              badgeStyle: {backgroundColor: "#36454f", borderWidth: 0}}}
              leftAvatar={<Avatar
                        rounded
                        icon={{name: averageRatingIndicator(item), color: averageRatingIndicatorColor(item), type: 'font-awesome', size: 20}}
                        />}
     />
 );



 _renderEvent = ({item}) => (
   <ListItem
     title={item.event.replace('_',' ')+(item.event === 'saves' ? " " : " (%)")} //saves should  not have %
     titleStyle={styles.titleListItem}
     containerStyle={styles.container}
     chevron
     subtitle={
       <FlatList
         data={item.playerResponses.slice(0,3)}
         renderItem={this._renderItem}
         keyExtractor={(item, index) => index.toString()}
       />
     }
     onPress={() => this.props.navigation.navigate('MatchEvent',
                 {
                   selections: this.state.data.filter(f => f.event === item.event)[0].playerResponses,
                   label: item.event
             })}
    />
 );



  render() {
    return (
       <View style={styles.container}>
       {this.state.loading &&
         <View style={styles.progressContainer}>
         <Text style={styles.titleListItemCenter}>{"server maintenance - back soon!"}</Text>
          </View>
       }
      {!this.state.loading &&
        <FlatList
          data={this.state.data}
          renderItem={this._renderEvent}
          keyExtractor={(item, index) => index.toString()}
        />
        }
   </View>
     );
  }
}

async function setDataSource(component){
   matchSelections(component.state.competition, component.state.home, component.state.away)
   .then( data => {
     component.setState({data: data.matchSelectionResponses, loading: false});
   })
   .catch((error) => console.log(error));
}




//export default createAppContainer(TabNavigator);

export default Match;
