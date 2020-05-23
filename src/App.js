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
	handleChange = e => {
		this.setState({
			//gets the value from the input
			item: e.target.value
		});
	};
	handleSubmit = e => {
		//prevents the browser from refreshing
		e.preventDefault();
		//assign id & item from the state into a new variable
		const newItem = {
			id: this.state.id,
			title: this.state.item

			//we now want to update a variable with what was in the items array, id, & item (newItem)
		};
		const updateItems = [...this.state.items, newItem];
		this.setState({
			//items will have what was in the array whenever we submit
			items: updateItems,
			//item will be set back to an empty string
			item: "",
			//a new id will be set for the new item
			id: uuid(),
			//finally, once we reset edit we set edit back to false
			editItem: false
		});
	};

	clearList = () => {
		this.setState({
			items: []
		});
	};
	handleEdit = id => {
		//filter through item with id and look for the id  you want to fileter
		const filteredItem = this.state.items.filter(item => item.id !== id);
		//'Find' method is useful for getting a single array back. We want to use it
		//to get the selected item
		const selectedItem = this.state.items.find(item => item.id === id);
		this.setState({
			//set  items to filteed items
			items: filteredItem,
			//set item to selected item & since we want to edit title, append the title
			item: selectedItem.title,
			//grab the id that you're passing down as we're runnin submit again
			id: id,
			//set edititem to true so we can use the itenary operator
			editItem: true
		});
	};
	handleDelete = id => {
		//filter through item with id and look for the id  you want to delet
		const filteredItem = this.state.items.filter(item => item.id !== id);
		//set the variable to the items
		this.setState({
			items: filteredItem
		});
	};
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
