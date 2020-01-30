import React, { Component } from "react";
import uuid from "uuid";
import "./index.scss";
import TodoInput from "./component/todoInputcomponent/TodoInput";
import TodoList from "./component/todoListComponent/TodoList";

class App extends Component {
	state = {
		items: [],
		item: "",
		id: uuid(),
		editItem: false
	};
	handleChange = e => {};
	handleSubmit = e => {};
	clearList = () => {};
	handleEdit = id => {};
	handleDelete = id => {};
	render() {
		return (
			<div className="to-do-container">
				<TodoInput
					item={this.state.item}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					editItem={this.state.editItem}
				/>
				<TodoList
					items={this.state.items}
					clearList={this.clearList}
					handleEdit={this.handleEdit}
					handleDelete={this.handleDelete}
				/>
			</div>
		);
	}
}

export default App;
