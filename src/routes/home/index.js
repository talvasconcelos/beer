import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				{this.props.beers && this.props.beers.map(beer => {
					return (
						<div key={beer.id} class={style.beer}>
							<h2>{beer.name} <span>{beer.id}</span> </h2>
							<p>{beer.tagline}</p>
							<p>{beer.description}</p>
						</div>
					)
				})}
			</div>
		);
	}
}
