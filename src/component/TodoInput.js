import React, { Component } from "react";

class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<div className="fas fa-book"></div>
							</div>
						</div>
						<input
							type="text"
							className="form-control text-capitaliz"
							placeholder="add todo item"
							value={item}
							onChange={handleChange}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-block btn-primary mt-3 text-uppercase"
					>
						add Item
					</button>
				</form>
			</div>
		);
	}
}

export default TodoInput;
