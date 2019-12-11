import React from "react";
import Searches from "./Searches";
import axios from "axios";
const cardStyle = {
  padding: "5px 25px 10px 25px",
  "max-width": "25%",
  margin: "2px",
  textAlign: "center"
};
// const url = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"
const container = {
  display: "flex",
  "flex-flow": "row wrap",
  "justify-content": "space-between",
  "align-items": "center"
};

const searchInput = {
  "width": "50%",
  "padding": "12px 20px",
  "margin": "18px ",
 " box-sizing": "border-box",
 " border": "2px 2px 2px solid black",
  "border-radius": "4px",
  "background-color":"white",
  "height" : "30px"
}
class Movies extends React.Component {
  state = {
    movies: [],
    searchField: ''
  };
  componentDidMount() {
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then(response => {
        this.setState({ movies: response.data.Search });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleChange = (e) => {
    this.setState({
      searchField : e.target.value
    })
  }
handleFormSubmit = (e) => {
  e.preventDefault();
  // console.log('hi')
}

  render() {
    const filteredMovies = this.state.movies.filter(movie => {
      return (
        movie.Title.toLowerCase().indexOf(this.state.searchField.toLowerCase()) !==
        -1
      );
    });
    let showMovies;
    showMovies = filteredMovies.map(movie => (
      <div className="card" key={movie.imdbID} style={cardStyle}>
        <h3>{movie.Title}</h3>
        <img
          width="150"
          class="card-img-top"
          alt={`The movie titled: ${movie.Title}`}
          src={movie.Poster}
        />
        <p>{movie.Year}</p>
      </div>
    ));
    return (
      <div>
      <form class="form-inline my-2 my-lg-0 justify-content-center" onSubmit={this.handleFormSubmit}>
      <input class="form-control mr-md-2" type="text" placeholder="Search" aria-label="Search" style={searchInput} onChange={this.handleChange} />
      <button class="btn btn-outline-secondary btn-md" type="submit">SEARCH</button>
  </form>
        <div className="container" style={container}>
          {showMovies}{" "}
        </div>
      </div>
    );
  }
}
export default Movies;

