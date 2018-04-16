import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import DetailSection from './detail_section';
import { GalleryRow, ProjectOverviewRow } from './project_page_rows';
import BlogHelmet from '../../blog_helmet';
import { fullRowWidth, contentRowWidths } from '../../../style/dimensions';
import { GridToolbarMargin } from '../../../style/grid_styles';

const styles = () => ({});

const CCLSProjectPage = (props) => {
  return (
    <Grid container>
      <GridToolbarMargin />
      <BlogHelmet pageTitle="CCLS Android App" />
      <Grid item {...fullRowWidth}>
        <Grid container justify="center" spacing={16}>
          <ProjectOverviewRow projectTitle="CCLS Android App" projectBlurb="Under Construction" />
          <GalleryRow />
          <Grid item {...contentRowWidths}>
            <DetailSection
              sectionTitle="Project Overview"
              sectionBlurb="What the project consisted of"
              sectionContent="Under Construction"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CCLSProjectPage.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(styles)(CCLSProjectPage);
