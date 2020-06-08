import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  baseContainer: {
     flex: 1,
     backgroundColor: '#36454f',
     alignItems: 'stretch',
     justifyContent: 'center',
     padding: 20

    },
  container: {
    flex: 1,
    backgroundColor: '#36454f',
    justifyContent: 'flex-start',
     alignItems: 'stretch',
   },
   shadowContainer: {
   flex: 1,
   backgroundColor: '#36454f',
   alignItems: 'stretch',
   justifyContent: 'flex-start',
   borderColor: '#36454f',
   marginLeft: 20,
   marginRight: 20,
   marginTop: 20,
   marginBottom: 20,
   //borderWidth: 2,//
  //bug means i cant use this... borderWidth: BORDER_WIDTH,
   borderRadius: 20,
   elevation: 10,
   },
   card: {
     elevation:10,
     borderWidth: 1,
     borderRadius: 20,
     backgroundColor: '#36454f',
     borderColor: '#36454f'
   },
   cardRow: {
     flexDirection: 'row',
     elevation:10,
     borderWidth: 1,
     borderRadius: 20,
     marginTop: 15,
     marginRight: 15,
     marginLeft: 15,
     backgroundColor: '#36454f',
     borderColor: '#36454f'
   },
   cardListItem: {
     borderBottomWidth: 0, height: 45, backgroundColor: "#36454f"
   },
   cardListItemNarrow: {
     borderBottomWidth: 0, height: 10, backgroundColor: "#36454f"
   },
   containerRow: {
     flex: 1,
     flexDirection: 'row',
     backgroundColor: '#36454f',
     alignItems: 'flex-start',
     justifyContent: 'flex-start',
    },
   tileContainer: {
     flex: 1,
     flexDirection: 'row',
     flexWrap: 'wrap',
     backgroundColor: '#36454f',
     alignItems: 'stretch',
     justifyContent: 'center',
    },
   scrollViewContainer: {
     flex: 1,
     backgroundColor: '#36454f'
  },
   progressContainer: {
     flex: 1,
     backgroundColor: '#36454f',
     alignItems: 'center',
     justifyContent: 'center',
    },
   listItem: {
    color: 'silver',
    fontWeight: 'bold'
  },
  listItemSmall: {
   color: 'silver',
   fontSize: 16
 },
 listItemSmallRed: {
  color: 'orangered',
  fontSize: 15
},
listItemSmallGreen: {
 color: 'green',
 fontSize: 15
},
listItemSuccess: {
   color: 'silver',
   fontWeight: 'bold',
   backgroundColor: 'green'
 },
 listItemFail: {
  color: 'silver',
  fontWeight: 'bold',
  backgroundColor: 'red'
},
listItemAboveAverage: {
 color: 'silver',
 fontWeight: 'bold',
 backgroundColor: 'darkorange'
},
listItemBelowAverage: {
 color: 'silver',
 fontWeight: 'bold',
 backgroundColor: 'lightyellow'
},
titleBox: {
   backgroundColor: '#36454f',
//   alignItems: 'stretch',
   justifyContent: 'center',
   },
  titleListItem: {
   color: 'grey',
   fontWeight: 'bold',
   fontSize: 30
 },
 titleListItemMedium: {
  color: 'grey',
  fontWeight: 'bold',
  fontSize: 25
},
 overlayItem: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 50,
  backgroundColor: 'grey'
},
splashTitle: {
 color: 'black',
 fontWeight: 'bold',
 fontSize: 25
},
overlayItemSuccess: {
 color: 'black',
 fontWeight: 'bold',
 fontSize: 50,
 backgroundColor: 'grey'
},

  ratingText: {
   color: 'grey',
   fontWeight: 'bold'
 },
 ratingTextPlus: {
  color: 'green',
  fontWeight: 'bold'
},
ratingTextLMinus: {
 color: 'red',
 fontWeight: 'bold'
},
  inputField: {
      height: 40,
      alignSelf: 'stretch',
      textAlign: "center",
      borderColor:  'gray',
      fontSize: 20,
      borderWidth: 1,
      color: "black",
      backgroundColor: 'white'
  }
});
