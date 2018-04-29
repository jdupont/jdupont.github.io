import React from 'react';

import CCLSGalleryPresentation from './ccls_gallery_presentation';
// Disabling eslint for these imports because they don't like webpack loader syntax
// But, that's needed in create-react-app without ejecting because there's no
// access to the webpack configuration files
/* eslint-disable */
import imageListing from '!json-loader!front-matter-loader!../../../docs/projects/ccls/ccls_gallery_listing.md';
/* eslint-enable */

class CCLSGalleryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: imageListing.attributes.images,
    };
  }

  render() {
    const { images } = this.state;

    return (
      <CCLSGalleryPresentation
        images={images.map(({ path, ...other }) => ({ src: `${process.env.PUBLIC_URL}/${path}`, ...other }))}
        {...this.props}
      />
    );
  }
}
CCLSGalleryContainer.propTypes = {
};

export default CCLSGalleryContainer;
