import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import ImagesColumn from './ImagesColumn';
import './gallery.css';

const API_KEY = '12064203-ee9b61324fe2e8a0947cc68d2';

class index extends Component {
  state = {
    searchTerm: 'happy',
    gallery: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${
          this.state.searchTerm
        }&image_type=photo&pretty=true&per_page=40`
      )
      .then(response => {
        const images = _.chunk(response.data.hits, 10);
        this.setState({ gallery: images });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { gallery } = this.state;
    if (!gallery.length) return <div>Loading..</div>;
    return (
      <>
        <div className="topnav">
          <input
            type="text"
            placeholder="Search for images.."
            id="search"
            onChange={this.handleChange}
          />
          <input type="button" value="Let's go" onClick={this.getImages} />
        </div>
        <div className="row">
          <ImagesColumn images={gallery[0]} />
          <ImagesColumn images={gallery[1]} />
          <ImagesColumn images={gallery[2]} />
          <ImagesColumn images={gallery[3]} />
        </div>
      </>
    );
  }
}

export default index;
