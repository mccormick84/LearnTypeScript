import React from 'react';
import {Button, View, Text} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';
import MainTab, {MainTabNavigationScreenParams} from './MainTab';

// RootStackParamList 타입을 선언할 때는 interface가 아닌 type을 사용
type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
  };
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

// RouteProp 사용 시
// 첫 번째 Gereric은 현재 사용 중인 내비게이션의 라우트 파라미터 타입을 위해 선언한 RootStackParamList를 넣고
// 두 번째 Generic에는 화면 이름
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

function DetailScreen() {
  const {params} = useRoute<DetailScreenRouteProp>();
  return (
    <View>
      <Text>Detail {params.id}</Text>
    </View>
  );
}

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MainTab}
        name={'MainTab'}
        options={{headerShown: false}}
      />
      <Stack.Screen component={DetailScreen} name={'Detail'} />
    </Stack.Navigator>
  );
}
