import React from 'react';
import {View, Text, Switch, StyleSheet, ScrollView} from 'react-native';

const TodoItem = ({todo, toggleTodo}) => {
    let itemStyle = (todo.done)
        ? styles.itemDone
        : styles.item;
    return (
        <View style={itemStyle}>
            <Text style={styles.itemText}>{todo.key}</Text>
            <Switch
                style={styles.itemSwitch}
                value={todo.done}
                onTintColor='deepskyblue'
                onValueChange={() => {
                toggleTodo(todo.key)
            }}/>
        </View>
    )
}

const Main = ({todoList, toggleTodo}) => {
    return (
        <ScrollView style={styles.main}>
            {todoList.map(todo => (<TodoItem key={todo.key} todo={todo} toggleTodo={toggleTodo}/>))
}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    itemDone: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    itemText: {
        flex: 1
    },
    itemSwitch: {
        flex: 0
    }
})

export default Main;