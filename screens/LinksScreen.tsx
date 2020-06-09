import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import * as faker from 'faker';

const data = new Array(100).fill(0).map( () => ({ 
  timestamp : ( new Date() ).getTime() - ~~(Math.random() * 31) * 864000000, 
  day : ( new Date() ).getTime() * 0.00001157407 - ~~(Math.random() * 31), 
  note : faker.hacker.phrase(), 
  amount : 1 + Math.random() * Math.random() * 1000,
}) )

export default function LinksScreen() {
  return (
    // <View>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Page content</Text>
        <View style={{ maxWidth: 720 }}>
          { data.map( (o,i) => (
            <View style={styles.listItem} key={i}>
              <Text style={styles.listItemDay}>{ ( new Date( o.timestamp ) ).toDateString() }</Text>
              <Text style={styles.listItemNote}>{ o.note }</Text>
              <Text style={styles.listItemAmount}>{ o.amount.toFixed( 2 ) }</Text>
            </View> 
          ) ) }
        </View>
      </ScrollView>
    // </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  title: {
    margin: 0,
    padding: 15,
    backgroundColor: '#eee',
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: "row",
    padding: 2
  },
  listItemDay: {
    minWidth: 150,
    maxWidth: 200, 
    textAlign: 'right',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  listItemAmount: {
    width: 80,
    textAlign: 'right',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 10,
  },
  listItemNote: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }
});
