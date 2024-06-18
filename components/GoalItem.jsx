import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {    
    return (
        <View style={styles.goalItemWrapper}>
            <Pressable 
                android_ripple={{color: "##5c07c9"}}
                onPress={props.onDeleteItem.bind(this, props.id)}>
            
                <Text style={styles.goalItem}>
                    {props.text}
                </Text>
            
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItemWrapper: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',      
    },
    goalItem: {
      color: 'white',
      textAlign: 'center',
      padding: 8,
    }
});
