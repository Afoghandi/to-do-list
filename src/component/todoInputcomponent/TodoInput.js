import React, { Component } from "react";
import "./todoinput.scss";

class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="input-container">
				<h3> To Do Input </h3>{" "}
				<form>
					<input
						className="input"
						type="text"
						placeholder="Type here to add item"
					></input>{" "}
					<button className="btn"> Add Item </button>{" "}
				</form>{" "}
			</div>
		);
	}
}

export default TodoInput;
