import { useState } from "react";
import { 
    View, 
    StyleSheet, 
    TextInput, 
    Button, 
    Modal, 
    Image 
} from "react-native";

function GoalInput({ addGoal, visible, onCancel }) {

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

                <Image 
                    source={require('../assets/goal.png')}
                    style={styles.image}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter your goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    {/* button cancel */}
                    <View style={styles.button}>
                        <Button 
                            color="#f31282"
                            title="Cancel" 
                            onPress={onCancel}
                            />
                    </View>
                    
                    {/* buttonn add */}
                    <View style={styles.button}>
                        <Button 
                        color="#b180f0"
                            title="Add Goal"
                            onPress={addGoalHandler}
                        />
                    </View>
                    
                </View>
                            
            </View>

        </Modal>
        
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      marginBottom: 24,
      backgroundColor: '#311b6b'
    },  
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 8,        
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    }
});
