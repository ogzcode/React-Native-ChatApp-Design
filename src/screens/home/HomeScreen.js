import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../services/request";

import { size } from "../../assets/style/size.js";
import { color } from "../../assets/style/color.js";

import { auth } from "../../services/firebaseConfig.js";

import Add from "./components/Add";
import Todo from "./components/Todo.js";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color["white"],
        paddingTop: size["8"],
    },
    list: {
        flex: 1,
        marginTop: size["8"],
    },
});

export default function HomeScreen() {
    const [todos, setTodos] = useState([]);
    const userId = auth.currentUser.uid;

    useEffect(() => {
        const getTodosAsync = async () => {
            const newTodos = await getTodos(userId);
            setTodos(newTodos);
        }
        getTodosAsync();
    }, []);

    const handleAddTodo = async (todo) => {
        await addTodo(todo, userId);
        const newTodos = await getTodos(userId);
        setTodos(newTodos);
    }

    const handleUpdateTodo = async (id, completed) => {
        const updatedTodo = todos.slice().map((item) => {
            if (item.id === id) {
                item.completed = completed;
            }
            return item;
        });

        setTodos(updatedTodo);

        await updateTodo(id, completed);
        const newTodos = await getTodos(userId);
        setTodos(newTodos);
    }

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        const todos = await getTodos(userId);
        setTodos(todos);
    }

    return (
        <View style={styles.container}>
            <Add onAddTodo={handleAddTodo} />
            <FlatList
                style={styles.list}
                data={todos}
                renderItem={({ item }) =>(
                    <Todo
                        item={item}
                        onUpdateTodo={handleUpdateTodo}
                        onDeleteTodo={handleDeleteTodo}
                    />
                )
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}