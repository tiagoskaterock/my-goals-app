import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {    
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItemWrapper}>
                <Text style={styles.goalItem}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItemWrapper: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
      padding: 8,
    },
    goalItem: {
      color: 'white',
      textAlign: 'center',
    }
});
