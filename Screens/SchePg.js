import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { SvgXml } from 'react-native-svg';
import HomeSvg from '../svgs/HomeSvg';
import CoachSvg from '../svgs/CoachSvg';
import ComSvg from '../svgs/ComSvg';
import MypgSvg from '../svgs/MypgSvg';
import ScheSvg from '../svgs/ScheSvgXmlBlack';

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';
const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };
function SchePg({ navigation }) {
  const [tabVal, setTab] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, marginTop: '18%', fontWeight: 'bold' }}>
          스케줄
        </Text>
      </View>
      <View style={styles.MoHeader}>
        <View style={styles.SysHeader}>
          <View style={{ flexDirection: 'row' }}>
            {tabVal == true ? (
              <TouchableOpacity
                onPress={() => setTab(false)}
                style={{
                  padding: '7%',
                  marginTop: '25%',
                  flex: 1,
                  // height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 3,
                  borderBottomColor: 'yellow',
                }}
              >
                <Text style={{ fontSize: 15 }}>전체</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setTab(false)}
                style={{
                  padding: '7%',
                  marginTop: '25%',
                  flex: 1,
                  // height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderBottomWidth: 3,
                  // borderBottomColor: "yellow",
                }}
              >
                <Text style={{ fontSize: 15 }}>월간</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.SysHeader1}>
          {tabVal == false ? (
            <TouchableOpacity
              onPress={() => setTab(false)}
              style={{
                padding: '7%',
                marginTop: '25%',
                flex: 1,
                // height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 3,
                borderBottomColor: 'red',
              }}
            >
              <Text style={{ fontSize: 15 }}>전체</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setTab(false)}
              style={{
                padding: '7%',
                marginTop: '25%',
                flex: 1,
                // height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                // borderBottomWidth: 3,
                // borderBottomColor: "red",
              }}
            >
              <Text style={{ fontSize: 15 }}>전체</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.main}>
        {(() => {
          if (tabVal == true)
            return (
              <View>
                <Calendar
                  style={{ padding: '0%' }}
                  markingType={'custom'}
                  markedDates={{
                    '2021-12-17': {
                      customStyles: {
                        container: {
                          backgroundColor: 'green',
                        },
                        text: {
                          color: 'black',
                          fontWeight: 'bold',
                        },
                      },
                    },
                    '2021-12-21': {
                      customStyles: {
                        container: {
                          backgroundColor: 'white',
                          elevation: 2,
                        },
                        text: {
                          color: 'blue',
                        },
                      },
                    },
                  }}
                  theme={{
                    'stylesheet.calendar.header': {
                      dayTextAtIndex0: {
                        color: 'red',
                      },
                      dayTextAtIndex6: {
                        color: 'blue',
                      },
                    },
                  }}
                />
                <View style={styles.main2}></View>
              </View>
            );
          else return <Text>액션빔~</Text>;
        })()}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{ alignItems: 'center' }}
        >
          <HomeSvg />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('CoachPg')}
          style={{ alignItems: 'center' }}
        >
          <CoachSvg />
          <Text>코칭기록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('SchePg')}
          style={{ alignItems: 'center' }}
        >
          <ScheSvg />
          <Text>스케줄</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('ComPg')}
          style={{ alignItems: 'center' }}
        >
          <ComSvg />
          <Text>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('MyPg')}
          style={{ alignItems: 'center' }}
        >
          <MypgSvg />
          <Text>마이페이지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default SchePg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // padding: "10%",
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  MoHeader: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  SysHeader: {
    // borderBottomColor: "green",
    // borderColor: "white",

    backgroundColor: 'white',

    // borderRadius: 5,
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: 'center',
  },
  SysHeader1: {
    backgroundColor: 'white',
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "stretch",
  },
  main: {
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
    // backgroundColor: "red",
    flex: 6,
  },
  main2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  // main: {
  //   // backgroundColor: "blue",
  //   flex: 6,
  // },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  item: {
    flex: 5 / 6,

    // marginHorizontal: 16,
  },
  num: {
    flex: 1 / 6,
    // marginRight: "80%",
  },
  title: {
    fontSize: 30,
  },
  scho: {
    fontSize: 15,
  },
  psysical: {
    fontSize: 15,
  },
  score: {
    fontSize: 32,
  },
  day: {
    fontSize: 15,
  },
});
