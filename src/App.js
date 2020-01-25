import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

class App extends React.Component {
	state = {
		items: [
			{
				id: 1,
				titele: "wake up"
			},
			{
				id: 2,
				title: "make breakfast"
			}
		],
		id: uuid(),
		item: "",
		editItem: false
	};
	handleChange = e => {};
	handleSubmit = e => {};
	clearList = () => {};
	handleEdit = id => {};
	handleDelete = id => {};
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-8 mt-5">
							<h3 className="text-capitalize text center"> To do input</h3>
							<TodoInput
								item={this.state.item}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
							/>
							<TodoList
								item={this.state.items}
								clearList={this.clearList}
								handleDelete={this.handleDelete}
								handleEdit={this.handleEdit}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
