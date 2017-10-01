import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Gallery from 'react-grid-gallery';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      images: this.props.images
    };
  }

  render () {
    return (
      <Gallery
        images={this.state.images}
        showLightboxThumbnails={true}
        enableImageSelection={false}
      />
    );
  }
}

App.proptypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      thumbnailCaption: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired
    })
  ).isRequired
};

App.defaultProps = {
  images: [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
      thumbnailCaption: 'After Rain (Jeshu John - designerspics.com)',
      caption: 'After Rain (Jeshu John - designerspics.com)'
    },
    {
      src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
      thumbnailCaption: 'Boats (Jeshu John - designerspics.com)',
      caption: 'Boats (Jeshu John - designerspics.com)'
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailCaption: 'Coloured pencils',
      caption: 'Coloured pencils'
    },
    {
      src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
      thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
      caption: '8H (gratisography.com)',
      thumbnailCaption: '8H'
    },
    {
      src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
      thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
      caption: '286H (gratisography.com)',
      thumbnailCaption: '286H'
    },
    {
      src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
      caption: '315H (gratisography.com)',
      thumbnailCaption: '315H'
    },
    {
      src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
      caption: '201H (gratisography.com)',
      thumbnailCaption: '201H'
    },
    {
      src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
      caption: 'Big Ben (Tom Eversley - isorepublic.com)',
      thumbnailCaption: 'Big Ben'
    },
    {
      src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
      caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
      thumbnailCaption: 'Red Zone - Paris'
    },
    {
      src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
      caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
      thumbnailCaption: 'Wood Glass'
    },
    {
      src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
      thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
      caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
      thumbnailCaption: 'Flower Interior Macro'
    }
  ]
};

export default App;
