import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Button, Linking, FlatList} from 'react-native';
import { ListItem, Tile} from 'react-native-elements';
import {SplashScreen } from 'expo';
import {styles} from './Styles';
import {competitions} from "../service/PlayerService";


class LandingPage extends React.Component {

  constructor(props) {
   super(props);

   this.state = {
     loading: false,
     competitions:  []
   }

   SplashScreen.hide();
   setDataSource(this);

}


_renderCompetition = ({item}) => (
  <ListItem
    title={item.label}
    titleStyle={styles.listItem}
    chevron
    containerStyle={{ borderBottomWidth: 0, backgroundColor: "#36454f" }}
    onPress={() => this.props.navigation.navigate('Home',
      {
        competition: item.competition,
        country: item.country,
        label: item.label
      })}
   />
);


_renderItem = ({item}) => (
  <ListItem
    title={item.countryResponse.country}
    titleStyle={styles.titleListItem}
    containerStyle={{ borderBottomWidth: 0, backgroundColor: "#36454f" }}
    subtitle={
      <View>
      <FlatList
        data={item.competitionResponses.filter(f => f.fantasyLeague === true)}
        renderItem={this._renderCompetition}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
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
       data={this.state.competitions}
       renderItem={this._renderItem}
       keyExtractor={(item, index) => index.toString()}
       />}
      <Text style={{paddingBottom: 10, paddingTop: 10, paddingRight: 10, textAlign: "center", color: 'tomato'}} onPress={ ()=> Linking.openURL('https://s3.amazonaws.com/tabiiki-privacy-policy/privacy_policy.html') } >
         Privacy Policy
         </Text>
    </View>
  );
 }
}


async function setDataSource(component){
   competitions()
   .then( data => {
     //console.log());
     component.setState({competitions: data.filter(f => f.competitionResponses.map(m => m.fantasyLeague).includes(true)), loading: false});
   })
   .catch((error) => console.log(error));
}





export default LandingPage;
