import React from 'react';

let e = React.createElement;

export default class Instructions extends React.Component {
    render() {
        return (
            e("div", {className: "instructions"},
            e("h2", null, "Instructions"),
                e("ol",null,
                    e("li", null, "Using what you’ve learned this week, create a page of an application that enables users to vote and leave reviews on movies."),
                    e("li", null, "You should include at least the following components:",
                        e("ol",{type: "a"},
                            e("li", null, "MovieList – a container for all the Movie components and their data."),
                            e("li", null, "Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)"),
                            e("li", null, "Stars – a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)"),
                            e("li", null, "ReviewList – a container inside of a Movie that houses Review components."),
                            e("li", null, "Review – A text review a user can leave on a movie."),
                            e("li", null, "ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.")
                        )
                    ),
                    e("li", null, "My DOM and possible mocha/chai footprint",
                        e("ol",{type: "a"},
                            e("li", null, "MovieList – a container for all MovieCards.",
                                e("ol",{type: "i"},
                                    e("li", null, "MovieCard(s)",
                                        e("ol",{type: "1"},
                                            e("li", null, "Title - (id,"),
                                            e("li", null, "Poster"),
                                            e("li", null, "Rating - aggregated average across all current movie's reviews - calculated upon start"),
                                            e("li", null, "Reviews Button - onClick handleClick (Calls MovieReviewCard passing current movie props)"),
                                        ),
                                    ),
                                ),
                            ),
                            e("li", null, "MovieReviewCard - single selected movie listed",
                                e("ol",{type: "i"},
                                    e("li", null, "Title"),
                                    e("li", null, "Poster"),
                                    e("li", null, "Rating - aggregated average across all current movie's reviews"),
                                    e("li", null, "Existing reviews"),
                                    e("li", null, "No Reviews Button"),
                                    e("li", null, "backToMovieList Button - onClick handleClick"),
                                    e("li", null, "NewMovieReviewForm",
                                        e("ol",{type: "1"},
                                            e("li", null, "Name - onChange handleNameChange"),
                                            e("li", null, "Date - onChange handleDateChange"),
                                            e("li", null, "Review - onChange handleTextAreaChange"),
                                            e("li", null, "Rating - onChange handleRatingChange"),
                                            e("li", null, "Submit button - onSubmit handleSubmit (Writes new revies to reviews[], causes render including rating recalculation) "),
                                        ),
                                    ),
                                ),
                            )
                        )
                    )
                )
            )
        )
    }
}