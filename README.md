# Cooking app
A cooking app using React Navigation and Redux.

## Features
- displaying recipes by category.
- adding a recipe to favorites.
- filtering recipes (gluten-free, lactose-free, vegan & vegetarian).

## React Navigation
- handling stack of screens for recipes, favorites and filters with createStackNavigator and createAppContainer.
- using props.navigation to navigate between screens.
- handling data from component to header with setParams and getParam.
- custom header title with navigationOptions.
- using react-native-screens for better performance.
- custom buttons in the header with react-navigation-header-buttons.
- adding bottom tabs with react-navigation-tabs.
- custom style on Android with react-navigation-material-bottom-tabs.
- custom SideDrawer with react-navigation-drawer.

## Redux and React-Redux
- using actions and reducers to store favorite recipes and filtered recipes.
- handling logic to filter recipes.
- using useSelector hook to get the state.
- using props.navigation to pass data to the header without re-render.
- using useDispatch hook to dispatch actions. 
- passing useDispatch to the header with useEffect and useCallback to limit re-render cycles.

## React Native
- using FlatList, TouchableOpacity, ScrollView, ImageBackground, Switch.
- custom components for category card and recipe item.
- custom fonts and color constants.
- using React hooks (useState, useEffect, useCallback).

Based on [React Native - The Practical Guide](https://www.udemy.com/react-native-the-practical-guide/) by Maximilian Schwarzmüller.

