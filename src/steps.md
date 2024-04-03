

### 3. Create a new file named `TodoList.js` in the `Features/Todo` folder and add the following code:

```jsx
// Path: src/Features/Todo/TodoList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./TodoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={() => dispatch(addTodo("New Todo"))}>
                Add Todo
            </button>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                        onClick={() => dispatch(toggleTodo(todo.id))}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

```

### 4. Update the `App.js` file with the following code:

```jsx
// Path: src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./App/store";
import TodoList from "./Features/Todo/TodoList";

function App() {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
}

export default App;
```

### 5. Run the application using the following command:

```bash
npm start
```

### 6. Open the browser and navigate to `http://localhost:3000/` to see the application running.

### 7. Click on the "Add Todo" button to add a new todo item to the list.

### 8. Click on a todo item to toggle its completion status.

### 9. You have successfully implemented a basic todo list application using Redux Toolkit in React.

## Conclusion

In this guide, you learned how to create a basic todo list application using Redux Toolkit in React. You created a new Redux slice to manage the todo state and implemented actions to add and toggle todo items. You also created a new component to display the todo list and interact with the Redux store using the `useSelector` and `useDispatch` hooks. By following this guide, you should now have a better understanding of how to use Redux Toolkit to manage state in React applications.

## Next Steps

- Explore more advanced features of Redux Toolkit, such as creating async actions, using the `createAsyncThunk` API, and working with middleware.
- Implement additional features in the todo list application, such as editing and deleting todo items.
- Learn how to structure a larger Redux application with multiple slices and complex state management requirements.
- Experiment with integrating Redux Toolkit with other libraries and frameworks, such as React Native, Angular, or Vue.js.

## Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [Redux Official Documentation](https://redux.js.org/)
- [React Official Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [React Native Documentation](https://reactnative.dev/)
- [Angular Documentation](https://angular.io/)
- [Vue.js Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Documentation](https://nodejs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/)
- [SQLite Documentation](https://www.sqlite.org/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [AWS Documentation](https://aws.amazon.com/documentation/)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Jest Documentation](https://jestjs.io/)
- [Cypress Documentation](https://docs.cypress.io/)
- [Testing Library Documentation](https://testing-library.com/)
- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Husky Documentation](https://typicode.github.io/husky/#/)