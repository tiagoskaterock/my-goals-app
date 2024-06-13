import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoal(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {
        text: enteredGoalText,
        id: Math.random().toString()
      }
    ]);
  }

  return (
    <View style={styles.appContainer}>
      
      <GoalInput addGoal={addGoal} />

      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={({ item }) => {
            return (
              <GoalItem text={item.text} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },  
  goalsContainer: {
    flex: 5,
  },
});
