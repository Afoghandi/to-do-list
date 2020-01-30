import React, { Component } from "react";
import "./todoitem.scss";

class TodoItem extends Component {
	render() {
		const { title, handleDelete, handleEdit } = this.props;
		return (
			<div className="item-container">
				<h6>Go shoppin</h6>
				<div className="icon-container">
					<span className="trash">
						<i className="fas fa-trash"> </i>{" "}
					</span>{" "}
					<span className="edit">
						<i className="far fa-edit"> </i>{" "}
					</span>{" "}
				</div>
			</div>
		);
	}
}

export default TodoItem;
