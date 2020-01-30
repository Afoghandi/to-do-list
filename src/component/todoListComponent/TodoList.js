import React, { Component } from "react";
import "./todolist.scss";
import TodoItem from "../todoItemcomponent/TodoItem";

class TodoList extends Component {
	render() {
		const { items, handleEdit, handleDelete, clearList } = this.props;
		return (
			<div className=" todo-container">
				<h2> To Do List </h2>{" "}
				<div className="list-container">
					<TodoItem />
					<button className="btn-danger"> Clear List </button>{" "}
				</div>{" "}
			</div>
		);
	}
}

export default TodoList;
