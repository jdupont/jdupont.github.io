import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const ImageTile = (props) => {
  const { classes } = props;

  return (
    <GridListTile >
      <img
        src={`${process.env.PUBLIC_URL}/images/me.jpg`}
        alt="temporary placeholder"
        height="auto"
      />
      <GridListTileBar
        title="Screenshot"
        classes={{
            root: classes.titleBar,
            title: classes.title,
        }}
        actionIcon={
          <IconButton>
            <StarBorderIcon className={classes.title} />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

ImageTile.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3.5} cellHeight={180} >
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
        <ImageTile classes={classes} />
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(styles)(SingleLineGridList);
