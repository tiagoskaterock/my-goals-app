import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoal(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {
        text: enteredGoalText,
        id: Math.random().toString()
      }
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
      
      <Button 
        title='Add new Goal'
        color="#e065ec"
        onPress={startAddGoalHandler}
      />

      { 
        modalIsVisible && 
        <GoalInput 
          visible={modalIsVisible}
          addGoal={addGoal} 
          onCancel={endAddGoalHandler}
        /> 
      }

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => {
            return (
              <GoalItem
                text={item.text}
                id={item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e0854',
  },  
  goalsContainer: {
    flex: 5,
  },
});
