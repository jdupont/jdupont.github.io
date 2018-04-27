import React from 'react';

import CCLSProjectPagePresentation from './ccls_project_page_presentation';
import SectionManager from './section_manager';
// Disabling eslint for these imports because they don't like webpack loader syntax
// But, that's needed in create-react-app without ejecting because there's no
// access to the webpack configuration files
/* eslint-disable */
import cclsProjectOverview from '!json-loader!front-matter-loader!../../../docs/projects/ccls/ccls_project_overview.md';
/* eslint-enable */

class CCLSProjectPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.manager = new SectionManager();
    this.state = { sections: [...this.manager.sections()].sort(SectionManager.sortByOrdinal) };
  }

  render() {
    const { sections } = this.state;

    return (
      <CCLSProjectPagePresentation
        sections={sections}
        {...this.props}
      />
    );
  }
}

export default CCLSProjectPageContainer;
