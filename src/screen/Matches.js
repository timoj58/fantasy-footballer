
import React from 'react';

/*import {
  StackNavigator,
} from 'react-navigation';
*/
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';

import {events} from "../service/PlayerService";


import {styles} from './Styles';



//const Tab = createBottomTabNavigator();

class Matches extends React.Component {
  constructor(props) {
   super(props);


   this.state = {
     loading: true,
     country: props.navigation.state.params.country,
     competition: props.navigation.state.params.competition,
     matches: []
   }

   setDataSource(this);

 }


 _renderItem = ({item}) => (
   <ListItem
     title=
      <View>
        <Text style= {styles.listItemSmall}>{item.home.label}</Text>
        <Text style= {styles.listItemSmall}>{item.away.label}</Text>
      </View>
     chevron
     containerStyle={styles.container}
     onPress={() => this.props.navigation.navigate('Match',
       {
         label: item.home.label + ' vs '+ item.away.label
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
          data={this.state.matches}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          />}
   </View>
     );
  }
}


async function setDataSource(component){
   events(component.state.country, component.state.competition)
   .then( data => {
     var exists = data.length > 0;
     component.setState({matches: exists ?  data.map(m => m.upcomingEventResponses)[0] : [], loading: false});
   })
   .catch((error) => console.log(error));
}



//export default createAppContainer(TabNavigator);

export default Matches;
