import React from 'react';
import { PureComponent } from "react";

export default class Search extends PureComponent {
	render() {
		return (
			<div>
				<input
					type="search"
					id="movieSearch"
					name="movieSearch"
					placeholder={this.props.movietext}
				></input>
			</div>
		);
	}
}
