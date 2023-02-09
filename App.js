import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TouchableOpacity, Text } from 'react-native';
// pages
import NotesDisplay from './Screens/NoteScreens/DisplayNotes';
import TodoDisplay from './Screens/ToDoScreens/DisplayTodo';
import SettingScreen from './Screens/SettingScreen';

const Stack = createNativeStackNavigator();
const RightDrawer = createDrawerNavigator();
const LeftDrawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TodoStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: null,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
              }}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}>◄ </Text>
              <Text style={{ fontSize: 20, color:'black' }}>Settings</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const NotesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: null,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
              }}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}>◄ </Text>
              <Text style={{ fontSize: 20, color:'black' }}>Settings</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const DisplayNotes = ({ navigation }) => {
  return (
    <NotesDisplay navigation={navigation} />
  )
}

const DisplayTodo = ({ navigation }) => {
  return (
    <TodoDisplay navigation={navigation} />
  )
}

const LeftDrawerNotes = () => {
  return (
    <LeftDrawer.Navigator initialRouteName="All-notes">
      <LeftDrawer.Screen
        name="All-notes"
        component={DisplayNotes}
        options={{
          header: () => null,
          drawerPosition: 'left', 
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            marginTop:'30%',
            width:'100%'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
      />
    </LeftDrawer.Navigator>
  )
}

const LeftDrawerTodo = () => {
  return (
    <LeftDrawer.Navigator initialRouteName="All-notes">
      <LeftDrawer.Screen
        name="All-todos"
        component={DisplayTodo}
        options={{
          header: () => null,
          drawerPosition: 'left', 
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            marginTop:'30%',
            width:'100%'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
      />
    </LeftDrawer.Navigator>
  )
}

const RightDrawerTodo = () => {
  return (
    <RightDrawer.Navigator
      initialRouteName='HomeScreen'>
      <RightDrawer.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            width: '40%',
            height: '40%',
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={LeftDrawerTodo}
      />
      <RightDrawer.Screen
        name="SettingScreen"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings1',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            width: '40%',
            height: '40%',
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={TodoStack}
      />
    </RightDrawer.Navigator>
  )
}

const RightDrawerNotes = () => {
  return (
    <RightDrawer.Navigator
      initialRouteName='HomeScreen'>
      <RightDrawer.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            width: '40%',
            height: '40%',
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={LeftDrawerNotes}
      />

      <RightDrawer.Screen
        name="SettingScreen"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings2',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            width: '40%',
            height: '40%',
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={NotesStack}
      />
    </RightDrawer.Navigator>
  )
}

// 1
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Notess"
          component={RightDrawerNotes}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Todos"
          component={RightDrawerTodo}
          options={{
            headerShown: false,
            tabBarLabel: 'To-dos',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;