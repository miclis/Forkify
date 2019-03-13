import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults(query) {
		const proxy = 'https://cors-anywhere.herokuapp.com/';
		const key = 'b8319adb76c0cbd71eeb70cc60e4a928';
		try {
			const res = await axios(
				`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
			);
			this.result = res.data.recipes;
		} catch (error) {
			alert(error);
		}
	}
}
