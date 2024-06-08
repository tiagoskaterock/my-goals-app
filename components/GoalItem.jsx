import { StyleSheet, View } from "react-native";

function GoalItem() {
    return (
        <View style={styles.goalItemWrapper}>
            <Text style={styles.goalItem}>
                {item.text}
            </Text>
        </View>
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
