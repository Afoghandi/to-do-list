import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: "",
		editItem: false
	};
	handleChange = e => {
		this.setState({
			// gets the value from the input
			item: e.target.value
		});
	};
	handleSubmit = e => {
		// prevents the browser from refreshing
		e.preventDefault();
		//assign id & item from the state into a new variable
		const newItem = {
			id: this.state.id,
			title: this.state.item
		};
		//now we want to update a variable with what was in the items array, id & item(newItem)
		const updatedItems = [...this.state.items, newItem];

		this.setState({
			//items will have what was in the array whenever we submit
			items: updatedItems,
			//item will be an emty string once we submit
			item: "",
			//a new id will be set for new item
			id: uuid(),
			//finally, we want to reset edit item to rerender once we render application
			editItem: false
		});
	};
	clearList = () => {
		this.setState({
			//clear the items using an empty array
			items: []
		});
	};
	handleDelete = id => {
		//filter through item with the id and look for the id you want then set it to a variable
		const filiteredItems = this.state.items.filter(item => item.id !== id);
		this.setState({
			// set the variable to the items
			items: filiteredItems
		});
	};
	handleEdit = id => {
		console.log(`edit edit ${id}`);
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5">
						<h3 className="text-capitalize text-center">todo input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
