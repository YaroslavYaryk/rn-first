import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'

const GoalItem = props => {

	const leftActionsHandler = (progress, dragX) => {

		const scale = dragX.interpolate({
			inputRange: [0, 100],
			outputRange: [0, 1],
			// extrapolate: 'clamp'
		})

		return (
			<View style={styles.deleteButton}>
				<Text style={[styles.actionText,]} onPress={() => { props.removeItem(props.item.key) }}>
					Delete
				</Text>
			</View>
		)
	}


	return (
		<Swipeable
			renderRightActions={leftActionsHandler}
		// onSwipeableRightOpen={() => { props.removeItem(props.item.key) }}
		>
			<View style={styles.goalsList}>
				<Text onPress={() => { props.removeItem(props.item.key) }}>
					{props.item.value}
				</Text>
			</View>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	goalsList: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#DAF7A6',
		borderColor: 'black',
		borderWidth: 1,
	},
	deleteButton: {
		backgroundColor: "red",
		// justifyContent: 'center',
		alignItems: 'end',
		// flex: 1,
		padding: 10,
		marginVertical: 10,
	},
	actionText: {
		borderColor: "red	"
	}
});


export default GoalItem;