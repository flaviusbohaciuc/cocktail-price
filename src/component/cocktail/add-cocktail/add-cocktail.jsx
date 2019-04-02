import React, { Component } from 'react';

class AddCocktail extends Component {
	render() {
		return(
			<p>
				<input ref={qwe => this.somethingElse = qwe} />
				<button
					onClick={this.pushCocktail}>
					Don't touch me!
				</button>
			</p>
		)
	}
}

export default AddCocktail;