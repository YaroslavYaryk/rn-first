import React, { useState } from 'react';
import {
	StyleSheet, Text, View,
	Button,
	FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

	const [courseGoals, setCourseGoals] = useState([])
	const [isVisible, setIsVisible] = useState(false)


	const addGoalHandler = (goalTitle) => {
		if (!goalTitle.length) {
			return
		}
		setCourseGoals([...courseGoals, {
			key: Math.random().toString(),
			value: goalTitle
		}]);
		setIsVisible(false)
	}



	const deleteGoalHandler = (itemId) => {
		// console.log(goalTitle)
		setCourseGoals(courseGoals.filter((item) => item.key !== itemId));
	}

	const cancelHandle = () => {
		setIsVisible(false)
	}


	return (
		<View style={styles.container}>
			<Button title="Add New Goal" onPress={() => setIsVisible(true)} animationType='slide' />
			< GoalInput
				addGoalHandler={addGoalHandler}
				isvisible={isVisible}
				cancelHandle={cancelHandle}
			/>
			<View>
				<FlatList data={courseGoals} renderItem={itemData => < GoalItem item={itemData.item} removeItem={deleteGoalHandler} />} />

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},


});
