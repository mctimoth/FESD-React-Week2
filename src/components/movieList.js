import React from "react";
import MovieCard from './movieCard.js';
import InceptionPoster from './posters/inception.jpg';
import FrozenPoster from './posters/frozen.jpg';
import WatchmenPoster from './posters/watchmen.jpg';
import TenetPoster from './posters/tenet.jpg';
import CinderellaPoster from './posters/cinderella.jpg';


const MoviesDB = [
    {
        id: 0,
        title: "Inception",
        content: "From IMDB - A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 0,
        year: 2010,
        poster: InceptionPoster,
        reviews: [
            {
                id: 0,
                name: "Tim",
                date:"3/13/2021",
                content:"This is a review for Inception.",
                rating: 1
            },
            {
                id:1,
                name: "Tim",
                date:"3/13/2021",
                content:"This is a review for Inception.",
                rating: 2
            }
        ]
    },
    {
        id: 1,
        title: "Frozen",
        content: "From IMDB - When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
        rating: 0,
        year: 2013,
        poster: FrozenPoster,
        reviews: [
            {
                id: 0,
                name: "Tim",
                date:"3/13/2021",
                content:"This is a review for Frozen.",
                rating: 4   
            }
        ]
    },
    {
        id: 2,
        title: "Watchmen",
        content: "From IMDB - In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.",
        rating: 0,
        year: 2009,
        poster: WatchmenPoster,
        reviews: [
            {
                id: 0,
                name: "Tim",
                date:"3/13/2021",
                content:"This is a review for Watchmen.",
                rating: 4  
            }
        ]
    },
    {
        id: 3,
        title: "Tenet",
        content: "From IMDB - Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        rating: 0,
        year: 2020,
        poster: TenetPoster,
        reviews: []
    },
    {
        id: 4,
        title: "Cinderella",
        content: "From IMDB - Although mistreated by her cruel stepmother and stepsisters, Cinderella is able to attend the royal ball through the help of a fairy godmother.",
        rating: 0,
        year: 1997,
        poster: CinderellaPoster,
        reviews: []
    }
]

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            selectedMovieCard: "none"
        }        

        this.addReview = this.addReview.bind(this);
    }

    componentDidMount() {
        this.setState({ movies: MoviesDB});//this marries MoviesDB array to this.state.movies[]
    }

    addReview(review) {
    }

    onReviewsButtonClick(id) {
        console.log(id);
        this.setState({selectedMovieCard: id});
    }

    render() {  //the ... "spread" pulls all movie props and applies liberally via map()
    let movieCards = [];    
    if (this.state.selectedMovieCard === "none") {
        movieCards = this.state.movies.map(movie => 
            <MovieCard {...movie} key={movie.id} 
            onReviewsButtonClick = {(id) => {this.onReviewsButtonClick(id)}}/>)
        } else {
            const selectedMovieCard = this.state.movies[this.state.selectedMovieCard]
            movieCards.push(<MovieCard {...selectedMovieCard}
            onReviewsButtonClick = {(id) => {this.onReviewsButtonClick(id)}}/>)
            console.log(this.state.selectedMovieCard);
        }
        return (
            <div>
               {movieCards}
            </div>
        );
    }
}