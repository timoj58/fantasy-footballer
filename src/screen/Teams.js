
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';

import {styles} from './Styles';

import {teams} from "../service/PlayerService";


//const Tab = createBottomTabNavigator();

class Teams extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     loading: true,
     competition: props.navigation.state.params.competition,
     teams: []
   }

   setDataSource(this);
 }


 _renderItem = ({item}) => (
   <ListItem
     title={item.label}
     titleStyle={styles.listItemSmall}
     chevron
     containerStyle={{ borderBottomWidth: 0, backgroundColor: "#36454f"  }}
     onPress={() => this.props.navigation.navigate('Players',
       {
         label: item.label,
         team: item.id
       })}
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
          data={this.state.teams}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          />}
       </View>
     );
  }
}


async function setDataSource(component){
   teams(component.state.competition)
   .then( data => {
     component.setState({teams: data.teams, loading: false});
   })
   .catch((error) => console.log(error));
}




//export default createAppContainer(TabNavigator);

export default Teams;
