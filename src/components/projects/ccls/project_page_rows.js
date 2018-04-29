import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import CCLSGallery from './ccls_gallery_container';
import { fullRowWidth, contentRowWidths } from '../../../style/dimensions';

const GalleryRow = props => (
  <Grid item {...contentRowWidths} {...props}>
    <Paper>
      <Grid container>
        <Grid item {...fullRowWidth} >
          <CCLSGallery />
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

const projectOverviewRowstyles = theme => ({
  titleRow: {
    padding: `${2 * theme.spacing.unit}px ${theme.spacing.unit}px ${2 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
    background: emphasize(theme.palette.primary[300], 0.26),
    display: 'flex',
  },
  text: {
    color: theme.palette.background.default,
    alignSelf: 'center',
  },
  noTopPadding: {
    paddingTop: '0px !important',
  },
  paddedContent: {
    padding: `0px ${theme.spacing.unit * 3}px`,
  },
});

const ProjectOverviewRowUnstyled = (props) => {
  const {
    classes,
    projectTitle,
    projectBlurbNode,
    ...other
  } = props;

  return (
    <Grid item {...contentRowWidths} {...other}>
      <Paper>
        <Grid container>
          <Grid item {...fullRowWidth} component="div" className={classes.noTopPadding}>
            <div className={classes.titleRow}>
              <Typography className={classes.text} variant="headline">{projectTitle}</Typography>
            </div>
          </Grid>
          <Grid item className={classes.paddedContent} {...fullRowWidth}>
            { projectBlurbNode }
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

ProjectOverviewRowUnstyled.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  projectBlurbNode: PropTypes.node.isRequired,
  projectTitle: PropTypes.string.isRequired,
};

const ProjectOverviewRow = withStyles(projectOverviewRowstyles)(ProjectOverviewRowUnstyled);

export { GalleryRow, ProjectOverviewRow };
