import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import marked from 'marked';
import prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-java';

import { markdownStyles, renderHeading } from './markdown_styling';

const renderer = new marked.Renderer();

renderer.heading = renderHeading;

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  langPrefix: 'language-',
  highlight(code, lang) {
    let language;

    switch (lang) {
      case 'java':
        language = prism.languages.java;
        break;

      case 'diff':
        language = prism.languages.diff;
        break;

      case 'css':
        language = prism.languages.css;
        break;

      case 'js':
      case 'jsx':
      default:
        language = prism.languages.jsx;
        break;
    }

    return prism.highlight(code, language);
  },
  renderer,
});

const blogStyles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
  },
  paddedContent: {
    padding: theme.spacing.unit * 3,
  },
  titleRow: {
    background: emphasize(theme.palette.primary[300], 0.26),
    flexGrow: 1,
  },
  markdown: markdownStyles(theme),
});

const BlogPost = (props) => {
  const { classes } = props;

  const postDimensions = { xs: 12, md: 10, lg: 7 };

  const allBlogPosts = require.context('!json-loader!front-matter-loader!../../../public/posts/', false, /.md$/);

  const post = allBlogPosts(props.query.title);

  return (
    <Grid
      container
      className={classes.content}
      style={{ justifyContent: 'centered' }}
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item {...postDimensions}>
            <Paper className={classes.paddedContent}>
              <Grid container>
                <Grid item xs={12} className={classes.titleRow}>
                  <Typography type="display1">{post.attributes.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <div
                    className={classes.markdown}
                    dangerouslySetInnerHTML={{ __html: marked(post.body) }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

BlogPost.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  query: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default withStyles(blogStyles, { withTheme: true })(BlogPost);
