import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import { red, blue, green } from 'material-ui/colors';
import { AutoRotatingCarousel, Slide } from '../../../widgets/auto_rotating_carousel';

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
  const { classes, imageSource, ...other } = props;

  return (
    <GridListTile {...other} >
      <img
        src={imageSource}
        alt="temporary placeholder"
        style={{ height: '100%', width: 'auto' }}
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
  imageSource: PropTypes.string.isRequired,
};

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <AutoRotatingCarousel
          label='Get started'
          open={true}
          style={{ position: 'absolute' }}
        >
          <Slide
            media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
            mediaBackgroundStyle={{backgroundColor: red[400]}}
            contentStyle={{backgroundColor: red[600]}}
            title='This is a very cool feature'
            subtitle='Just using this will blow your mind.'
          />
          <Slide
            media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
            mediaBackgroundStyle={{backgroundColor: blue[400]}}
            contentStyle={{backgroundColor: blue[600]}}
            title='Ever wanted to be popular?'
            subtitle='Well just mix two colors and your are good to go!'
          />
          <Slide
            media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
            mediaBackgroundStyle={{backgroundColor: green[400]}}
            contentStyle={{backgroundColor: green[600]}}
            title='May the force be with you'
            subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
          />
        </AutoRotatingCarousel>
      </div>
      <GridList className={classes.gridList} cols={2.5} cellHeight={200} >
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource="https://gigaom.com/wp-content/uploads/sites/1/2012/09/widget.png" />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
        <ImageTile classes={classes} imageSource={`${process.env.PUBLIC_URL}/images/me.jpg`} />
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
