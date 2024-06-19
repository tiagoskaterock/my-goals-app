import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

function GoalInput({ addGoal, visible }) {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        addGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal 
            visible={visible}
            animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter your goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button 
                    title="Add Goal"
                    onPress={addGoalHandler}
                />
            </View>
        </Modal>
        
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
        padding: 8,
    },
});
