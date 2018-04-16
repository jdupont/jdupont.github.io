import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});


const DetailSection = (props) => {
  const {
    classes,
    sectionTitle,
    sectionBlurb,
    sectionContentNode,
  } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{ sectionTitle }</Typography>
        <Typography className={classes.secondaryHeading}>
          { sectionBlurb }
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        { sectionContentNode }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

DetailSection.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  sectionBlurb: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionContentNode: PropTypes.node.isRequired,
};

export default withStyles(styles)(DetailSection);
