import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
function App() {
	return (
		<div>
			<div className="container">
				<div className="row">
					<TodoInput />
					<TodoList />
				</div>
			</div>
		</div>
	);
}

export default App;
