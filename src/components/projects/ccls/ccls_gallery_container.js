import React from 'react';

import CCLSGalleryPresentation from './ccls_gallery_presentation';
// Disabling eslint for these imports because they don't like webpack loader syntax
// But, that's needed in create-react-app without ejecting because there's no
// access to the webpack configuration files
/* eslint-disable */
import imageListing from '!json-loader!front-matter-loader!../../../docs/projects/ccls/ccls_gallery_listing.md';
/* eslint-enable */

const CCLSGalleryContainer = (props) => {
  const { images } = imageListing.attributes;

  return (
    <CCLSGalleryPresentation
      images={images}
      {...props}
    />
  );
};

CCLSGalleryContainer.propTypes = {
};

export default CCLSGalleryContainer;
