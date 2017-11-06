import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements'; // 0.18.2
//import { Constants } from 'expo';
import Main from './components/Main';

import "@expo/vector-icons"; // 6.1.0

// https://snack.expo.io/HyatuP60W

const data = [
    {
        key: 'groceries',
        done: false
    }, {
        key: 'errands',
        done: false
    }, {
        key: 'homework',
        done: false
    }, {
        key: 'study',
        done: true
    }, {
        key: 'shopping',
        done: true
    }, {
        key: 'purchase',
        done: false
    }, {
        key: 'spending',
        done: false
    }, {
        key: 'swim',
        done: false
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: data
        }
        this.toggleTodo = this
            .toggleTodo
            .bind(this);
    }
    toggleTodo(key) {
        this.setState(prevState => {
            let todoList = prevState
                .todoList
                .map(todo => {
                    if (todo.key === key) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo;
                });
            return {todoList}
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor='deepskyblue'
                    leftComponent={{
                    icon: 'menu',
                    color: 'white'
                }}
                    centerComponent={{
                    text: 'Todo App',
                    style: {
                        color: 'white',
                        fontSize: 15
                    }
                }}
                    rightComponent={{
                    icon: 'add',
                    color: 'white'
                }}/>
                <Main todoList={this.state.todoList} toggleTodo={this.toggleTodo}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        /*paddingTop: Constants.statusBarHeight*/
    }
})