import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';

export default function ListInformation({kcal, protein, carbo, fat, vitaminc}) {
  return (
    <View>
      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize: 12}}
          title="แคลอรี่ (kcal)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="food"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{kcal}</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize: 12}}
          title="โปรตีน (g)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="egg"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{protein}</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize: 12}}
          title="คาร์โบไฮเดรต (g)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="hamburger"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{carbo}</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize: 12}}
          title="ไขมันทั้งหมด (g)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="water"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{fat}</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize: 12}}
          title="วิตามินซี (mg)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="pill"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{vitaminc}</Text>}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 12,
    fontFamily: 'NotoSansThai-Regular',
  },
});
