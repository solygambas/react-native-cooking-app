import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals</Text>
      <Button
        title="Go to meal details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
