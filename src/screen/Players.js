
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

import {styles} from './Styles';
import {players} from "../service/PlayerService";
import {dirtyRed} from "../util/PlayerUtils";
import {dirtyYellow} from "../util/PlayerUtils";
import {wizard} from "../util/PlayerUtils";
import {marksman} from "../util/PlayerUtils";
import {currentDirtyYellow} from "../util/PlayerUtils";
import {currentDirtyRed} from "../util/PlayerUtils";
import {currentWizard} from "../util/PlayerUtils";
import {currentMarksman} from "../util/PlayerUtils";
import {dirtyTrophyRed} from "../util/PlayerUtils";
import {dirtyTrophyYellow} from "../util/PlayerUtils";
import {wizardTrophy} from "../util/PlayerUtils";
import {marksmanTrophy} from "../util/PlayerUtils";
import {currentPepperColor} from "../util/PlayerUtils";



//const Tab = createBottomTabNavigator();

class Players extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     loading: true,
     team: props.navigation.state.params.team,
     players: []
   }

   setDataSource(this);

 }


 _renderItem = ({item}) => (
   <ListItem
     title={item.label}
     chevron
     titleStyle={styles.listItemSmall}
     containerStyle={styles.container}
     onPress={() => this.props.navigation.navigate('Player',
       {
         player: item
       })}
    subtitle={<View style={{flex: 1,  flexDirection: 'row'}}>
      {marksman(item) && <Icon
        name='trophy'
        type='font-awesome-5'
        size={15}
        color={marksmanTrophy(item)} />}
      {wizard(item) && <Icon
        name='trophy'
        type='font-awesome-5'
        size={15}
        color={wizardTrophy(item)} />}
        { dirtyRed(item) && <Icon
          name='trophy'
          type='font-awesome-5'
          size={15}
          color={dirtyTrophyRed(item)} />}
          { dirtyYellow(item) && <Icon
            name='trophy'
            type='font-awesome-5'
            size={15}
            color={dirtyTrophyYellow(item)} />}
          {currentMarksman(item) && <Icon
            name='pepper-hot'
            type='font-awesome-5'
            size={15}
            color={currentPepperColor(item.marksman, 'goals')} />}
          {currentWizard(item) && <Icon
            name='pepper-hot'
            type='font-awesome-5'
            size={15}
            color={currentPepperColor(item.wizard, 'assists')} />}
            { currentDirtyYellow(item) && <Icon
              name='pepper-hot'
              type='font-awesome-5'
              size={15}
              color={currentPepperColor(item.hardmanYellow, 'yellowCards')} />}
              { currentDirtyRed(item) && <Icon
                name='pepper-hot'
                type='font-awesome-5'
                size={15}
                color={currentPepperColor(item.hardmanRed, 'redCards')} />}
      </View>}
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
          data={this.state.players}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          />}
       </View>
     );
  }
}


async function setDataSource(component){
   players(component.state.team)
   .then( data => {
     component.setState({players: data, loading: false});
   })
   .catch((error) => console.log(error));
}



//export default createAppContainer(TabNavigator);

export default Players;
