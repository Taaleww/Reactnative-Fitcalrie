import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';

export default function ListSummaryNutrition({
  kcal = 0,
  protein = 0,
  carbo = 0,
  fat = 0,
  vitaminc = 0,
  percentCalories = 0,
  percentProtein = 0,
  percentCarbo = 0,
  percentFat = 0,
  percentVitamin = 0,
  totalProtein = 0,
  calorieOfUser = 0,
  totalCarbohydrate = 0,
  totalFat = 0,
  totalCabo_day_start=0,
  totalFat_day_start=0,
  BMR={BMR}
}) {
  return (
    <View>
      <View style={{paddingHorizontal: 18, paddingTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={percentCalories}
              radius={25}
              borderWidth={5}
              color={
                kcal > calorieOfUser
                  ? '#F89C8A'
                  : kcal < BMR
                  ? '#E2D784'
                  : '#50BFC3'
              }
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 8,
                  paddingHorizontal: 10,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {kcal + ' kcal'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 10,
                paddingTop: 2,
              }}>
              แคลอรี่
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={percentProtein}
              radius={25}
              borderWidth={5}
              color={protein > totalProtein ? '#50BFC3' : '#E2D784'}
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 8,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {protein + '   g'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 10,
                paddingTop: 2,
              }}>
              โปรตีน
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={percentCarbo}
              radius={25}
              borderWidth={5}
              color={
                carbo > totalCarbohydrate
                  ? '#F89C8A'
                  : carbo < totalCabo_day_start
                  ? '#E2D784'
                  : '#50BFC3'
              }
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 8,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {carbo + '   g'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 10,
                paddingTop: 2,
              }}>
              คาร์โบ
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={percentFat}
              radius={25}
              borderWidth={5}
              color={
                fat > totalFat
                  ? '#F89C8A'
                  : fat < totalFat_day_start
                  ? '#E2D784'
                  : '#50BFC3'
              }
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 8,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {fat + '   g'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 10,
                paddingTop: 2,
              }}>
              ไขมัน
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={percentVitamin}
              radius={25}
              borderWidth={5}
              color={vitaminc > 1000 ? '#50BFC3' : '#E2D784'}
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 8,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {vitaminc + '   mg'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 10,
                paddingTop: 2,
              }}>
              วิตามินซี
            </Text>
          </View>
        </View>
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
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
  },
});
