
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, Card, ListItem, Button, Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import { Pages } from 'react-native-pages';

import {getCombined} from "../util/PlayerUtils";
import {renderTrophies} from "../util/PlayerUtils";
import {averageRatingIndicator} from "../util/PlayerUtils";
import {averageRatingIndicatorColor} from "../util/PlayerUtils";
import {topPicks}  from "../service/PlayerService";


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class TopPicks extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     loading: true,
     competition:  props.navigation.state.params.competition,
     data: []
   }

//   setDataSource(this);

 }


 _renderItem = ({item}) => (
   <ListItem
   title={item.label}
   titleStyle={styles.listItemSmall}
  containerStyle={styles.container}
     subtitle={<View><Text style={styles.listItemTiny}>{item.currentTeam}</Text>{renderTrophies(item)}</View>}
     badge={{ value: item.fantasyEventScore.toFixed(2),
              textStyle: { color: 'limegreen', fontSize: 16 },
              containerStyle:{ position: 'absolute',  right: 25, top: 25 },
              badgeStyle: {backgroundColor: "#36454f", borderWidth: 0}}}
    leftAvatar={<Avatar
              rounded
              icon={{name: averageRatingIndicator(item), color: averageRatingIndicatorColor(item), type: 'font-awesome', size: 20}}
              />}
     />
 );



 _renderEvent(item){
  return  <View>
   <Text style={styles.titleListItemCenter}>{item.event.replace('_',' ')+(item.event === 'saves' ? "" : " (%)")}</Text>
    <FlatList
    data={item.playerResponses.slice(0,5)}
    renderItem={this._renderItem}
    keyExtractor={(item, index) => index.toString()}
    />
    <Button
      title="see all "
      titleStyle={styles.listItem}
      type="clear"
      icon={
      <Icon
      name="zoom-out"
      size={20}
      color="silver"
     />}
     iconRight
      onPress={() => this.props.navigation.navigate('TopPicksByEvent',
                {
                  selections: this.state.data.filter(f => f.event === item.event)[0].playerResponses,
                  label: item.event
            })}
    />
    </View>
 };



  render() {
    return (
       <View style={styles.container}>
       {this.state.loading &&
         <View style={styles.progressContainer}>
            <Text style={styles.titleListItemCenter}>{"server maintenance - back soon!"}</Text>
          </View>
       }
      {!this.state.loading &&
         <Pages>
         {this._renderEvent(this.state.data[0])}
         {this._renderEvent(this.state.data[1])}
         {this._renderEvent(this.state.data[2])}
         {this._renderEvent(this.state.data[3])}
        </Pages>
        }
   </View>
     );
  }
}


async function setDataSource(component){
   topPicks(component.state.competition)
   .then( data => {
     console.log(data); //need to re order this...goals, assists, saves, yellow cards
     component.setState({data: data, loading: false});
   })
   .catch((error) => console.log(error));
}




//export default createAppContainer(TabNavigator);

export default TopPicks;
