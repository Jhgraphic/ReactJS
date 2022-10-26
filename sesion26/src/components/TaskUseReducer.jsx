import React, { useReducer } from "react";

const CREATE = "CREATE";
const DELETE = "DELETE";
const FILTER1 = "FILTER1";
const FILTER2 = "FILTER2";

// INITIAL STATE
const initialState = [];

// Reducer
const todoReducer = (state, action) => {
    switch (action.type) {
        case CREATE:
            return [...state, action.payload];
        case DELETE:
            return state.filter((todo) => todo.id !== action.payload);
        case FILTER1:
            return state.filter((todo) => todo.status === "completed");
        case FILTER2:
            return state.filter((todo) => todo.status === "pending");
        default:
            return state;
    }
};

const TaskUseReducer = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodoPeding = () => {
        const newTodo = {
            id: state.length + 1,
            todo: `New task ${state.length + 1}`,
            status: "pending",
        };
        dispatch({ type: CREATE, payload: newTodo });
    };

    const addTodoCompleted = () => {
        const newTodo = {
            id: state.length + 1,
            todo: `New task ${state.length + 1}`,
            status: "completed",
        };
        dispatch({ type: CREATE, payload: newTodo });
    };

    const filterAllCompleted = () => {
        dispatch({ type: FILTER1 });
    };

    const filterPending = () => {
        dispatch({ type: FILTER2 });
    };

    const handleDelete = (id) => {
        dispatch({ type: DELETE, payload: id });
    };

    return (
        <div>
            <button onClick={addTodoPeding}>Add pending task</button>
            <br />
            <button onClick={addTodoCompleted}>Add completed task</button>
            <br />
            <button onClick={filterAllCompleted}>Completed task filter</button>
            <br />
            <button onClick={filterPending}>Pending task filter</button>
            <br />
            {state.map((todo) => {
                return (
                    <li key={todo.id}>
                        <h3>{todo.todo}</h3>
                        <h4>Status: {todo.status}</h4>
                        <button onClick={() => handleDelete(todo.id)}>Delete task</button>
                    </li>   
                );
            })}
        </div>
    );
};

export default TaskUseReducer;