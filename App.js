import 'react-native-gesture-handler';

// importing components
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

// pages
import NotesDisplay from './Screens/NoteScreens/DisplayNotes';
import TodoDisplay from './Screens/ToDoScreens/DisplayTodo';
import SettingScreen from './Screens/SettingScreen';
import About from './Screens/Aboutus';
import DeletePage from './Screens/DeleteItems';
import AddNewNote from './Screens/NoteScreens/AddNewNote';

// navigation stacks
// const Stack = createNativeStackNavigator();
const RightDrawer = createDrawerNavigator();
const LeftDrawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


// use drop down instead of right drawer
// link
//  https://www.npmjs.com/package/react-native-dropdown-select-list


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
        options={{
          title: 'All-notes',
          header: () => null,
          drawerPosition: 'left',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            marginTop: '30%',
            width: '100%'
          },
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayNotes}
      />
      <LeftDrawer.Screen
        name="category"
        options={{
          title: 'No category',
          header: () => null,
          drawerPosition: 'left',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            marginTop: '30%',
            width: '100%'
          },
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayNotes}
      />
      <LeftDrawer.Screen
        name="favorites"
        options={{
          title: 'My favorites',
          header: () => null,
          drawerPosition: 'left',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            marginTop: '30%',
            width: '100%'
          },
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayNotes}
      />
      <LeftDrawer.Screen
        name="locked"
        options={{
          title: 'Locked notes',
          header: () => null,
          drawerPosition: 'left',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            marginTop: '30%',
            width: '100%'
          },
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayNotes}
      />
      <LeftDrawer.Screen
        name="deletedNotes"
        options={{
          title: 'Recently deleted',
          header: () => null,
          drawerPosition: 'left',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerStyle: {
            marginTop: '30%',
            width: '100%'
          },
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayNotes}
      />
    </LeftDrawer.Navigator>
  )
}

const LeftDrawerTodo = () => {
  return (
    <LeftDrawer.Navigator initialRouteName="All-todo">
      <LeftDrawer.Screen
        name="AllTodos"
        options={{
          title: 'All to-dos',
          header: () => null,
          drawerPosition: 'left',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          drawerStyle: {
            marginTop: '30%',
            width: '100%'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={DisplayTodo}
      />
      <LeftDrawer.Screen
        name="category"
        options={{
          title: 'No category',
          header: () => null,
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayTodo}
      />
      <LeftDrawer.Screen
        name="favorites"
        options={{
          title: 'My favorites',
          header: () => null,
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayTodo}
      />
      <LeftDrawer.Screen
        name="locked"
        options={{
          title: 'Locked to-dos',
          header: () => null,
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayTodo}
      />
      <LeftDrawer.Screen
        name="deletedNotes"
        options={{
          title: 'Recently deleted',
          header: () => null,
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
        }}
        component={DisplayTodo}
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
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          drawerStyle: {
            width: '40%',
            height: '27%',
            borderBottomLeftRadius:20,
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={LeftDrawerTodo}
      />
      <RightDrawer.Screen
        name="Delete"
        options={{
          drawerLabel: 'Delete Items',
          title: 'Delete Items',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={DeletePage}
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
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={SettingScreen}
      />
      <RightDrawer.Screen
        name="AboutScreen"
        options={{
          drawerLabel: 'About Us',
          title: 'About',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={About}
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
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          drawerStyle: {
            width: '40%',
            height: '35%',
            borderBottomLeftRadius:20,
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={LeftDrawerNotes}
      />
      <RightDrawer.Screen
        name="Add"
        options={{
          drawerLabel: 'Add Note',
          title: 'Add Note',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={AddNewNote}
      />
      <RightDrawer.Screen
        name="Delete"
        options={{
          drawerLabel: 'Delete Items',
          title: 'Delete Items',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={DeletePage}
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
          drawerItemStyle:{
            borderBottomWidth:1,
            borderColor:'gray'
          },
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={SettingScreen}
      />

      <RightDrawer.Screen
        name="About"
        options={{
          drawerLabel: 'About us',
          title: 'About us',
          header: () => null,
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'white',
          headerStyle: {
            backgroundColor: "#F6F6F6"
          },
        }}
        component={About}
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
          name="Notes"
          component={RightDrawerNotes}
          options={{
            headerShown: false,
            tabBarActiveTintColor:'#1b93cf',
            tabBarIcon:({focused})=><Icon name = 'tasks' size={30} color={focused ? '#1b93cf' : 'gray'}/>
          }}
        />
        <Tab.Screen
          name="To-dos"
          component={RightDrawerTodo}
          options={{
            headerShown: false,
            tabBarActiveTintColor:'#1b93cf',
            tabBarIcon:({focused})=>(
              <Icon name = 'check-circle' size={30} color={focused ? '#1b93cf' : 'gray'}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;