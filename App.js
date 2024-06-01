import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const[enteredGoalText, setEnteredGoalText] = new useState('');
  const[courserGoals, setCourseGoals] = new useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText
    ])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Enter your goal"
          onChangeText={goalInputHandler}
        />
        <Button 
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
        {courserGoals.map((goal) =>
          <View style={styles.goalItemWrapper}>
            <Text
              style={styles.goalItem}
              key={goal}>
                {goal}
              </Text>
          </View>
        )}
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  },
  goalItemWrapper: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  }
  ,
  goalItem: {
    color: 'white',
    textAlign: 'center',
  }
});
