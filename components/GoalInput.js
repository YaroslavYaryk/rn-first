import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {

	const [enteredGoal, setEnteredGoal] = useState('')

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	}

	const addGoalHandler = () => {
		props.addGoalHandler(enteredGoal)
		setEnteredGoal('')
	}


	return (
		<Modal visible={props.isvisible}>
			<View style={styles.inputAddButton}>
				<TextInput
					placeholder='Course Goal'
					style={styles.goalInput}
					value={enteredGoal}
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonsStyle}>
					<View style={styles.button}>
						<Button
							title='CANCEL'
							color="red"
							onPress={props.cancelHandle}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title='ADD'
							onPress={addGoalHandler}
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({

	goalInput: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%'
	},
	inputAddButton: {
		flex: 1,
		justifyContent: "center",
		alignItems: 'center',
	},
	buttonsStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: "60%",
		paddingTop: 10,
	},
	button: {
		width: "40%",
	}

});

export default GoalInput;