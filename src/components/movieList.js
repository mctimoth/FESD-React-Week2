import React from "react";
import MovieCard from './movieCard.js';
import InceptionPoster from './posters/inception.jpg';
import FrozenPoster from './posters/frozen.jpg';
import WatchmenPoster from './posters/watchmen.jpg';
import TenetPoster from './posters/tenet.jpg';
import CinderellaPoster from './posters/cinderella.jpg';
// import ReviewsButton from './components/reviews-button.js';
// import reviewCard from './reviewCard.js';
// import ReviewForm from './reviewForm.js';

const MoviesDB = [
    {
        id: 1,
        title: "Inception",
        synopsis: "From IMDB - A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 0,
        year: 2010,
        poster: InceptionPoster,
        reviews: []
    },
    {
        id: 2,
        title: "Frozen",
        synopsis: "From IMDB - When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
        rating: 0,
        year: 2013,
        poster: FrozenPoster,
        reviews: []
    },
    {
        id: 3,
        title: "Watchmen",
        synopsis: "From IMDB - In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.",
        rating: 0,
        year: 2009,
        poster: WatchmenPoster,
        reviews: []
    },
    {
        id: 4,
        title: "Tenet",
        synopsis: "From IMDB - Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        rating: 0,
        year: 2020,
        poster: TenetPoster,
        reviews: []
    },
    {
        id: 5,
        title: "Cinderella",
        synopsis: "From IMDB - Although mistreated by her cruel stepmother and stepsisters, Cinderella is able to attend the royal ball through the help of a fairy godmother.",
        rating: 0,
        year: 1997,
        poster: CinderellaPoster,
        reviews: []
    },
]

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.setState({ movies: MoviesDB});
    }

    render() {
        const movieCards = this.state.movies.map(movie => <MovieCard {...movie} key={movie.id} />)
        return (
            <div>
               {movieCards}
            </div>
        );
    }
}