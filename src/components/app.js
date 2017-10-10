import { h, Component } from 'preact'
import { Router } from 'preact-router'

import { fetchBeers } from '../lib/api'

import Header from './header'
import Home from '../routes/home'
// import Home from 'async!./home'
// import Profile from 'async!./profile'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)

		this.state = {
			beers: [],
			beerIndex: 0,
			showDetails: false
		}
	}

	handleRoute = e => {
		this.currentUrl = e.url
	}

	handleClick = (e) => {
		this.setState({showbeer: !this.state.showbeer, beerId: e})
	}

	test = () => {
		this.setState({beerIndex: this.state.beerIndex + 1})
	}

	test2 = (e) => {
		e.deltaY < 0 ? this.state.beerIndex == 0 ? null : this.setState({beerIndex: this.state.beerIndex - 1}) : this.state.beerIndex == this.state.beers.length - 1 ? null : this.setState({beerIndex: this.state.beerIndex + 1})
	}

	componentDidMount() {
		fetchBeers('beers?page=1')
			.then(r => this.setState({ beers: r }))
	}

	render({}, {beers, beerIndex, ...state}) {
		return (
			<div id="app">
				<div class='wrapper' onWheel={this.test2}>
					{(!state.showDetails && beers.length) &&
						<div>
							<h1>#{beers[beerIndex].id}</h1>
							<h2>{beers[beerIndex].name}</h2>
							<p>{beers[beerIndex].tagline}</p>
							<p>{beers[beerIndex].description}</p>
							<button onClick={this.test}>Click Me</button>
						</div>}
				</div>
				{/* <Router onChange={this.handleRoute}>
					<Home path="/" beers={this.state.beers} />
				</Router> */}
			</div>
		)
	}
}
