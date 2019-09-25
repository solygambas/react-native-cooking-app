import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>Category Meals</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to meal details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
