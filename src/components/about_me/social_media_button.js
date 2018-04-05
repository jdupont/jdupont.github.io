import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import SvgIcon from 'material-ui/SvgIcon';

import { leftIcon } from '../../style/buttons';

const styles = theme => ({
  ...leftIcon(theme),
  coloredIcon: {
    color: theme.palette.secondary.A400,
  },
});

const SocialMediaButton = (props) => {
  const {
    pageUrl,
    iconUrl,
    label,
    classes,
    ...other
  } = props;

  return (
    <Button component="a" href={pageUrl} {...other}>
      <SvgIcon className={classnames(classes.leftIcon, classes.coloredIcon)}>
        <svg>
          <use href={iconUrl} />
        </svg>
      </SvgIcon>
      { label }
    </Button>
  );
};

SocialMediaButton.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  pageUrl: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const StyledSocialMediaButton = withStyles(styles, { withTheme: true })(SocialMediaButton);

const StackOverflowButton = props => (
  <StyledSocialMediaButton
    pageUrl="https://stackoverflow.com/users/8762152/jdupont"
    iconUrl={`${process.env.PUBLIC_URL}/images/stack_overflow.svg#main`}
    label="Stack&nbsp;Overflow"
    {...props}
  />
);

const LinkedInButton = props => (
  <StyledSocialMediaButton
    pageUrl="https://www.linkedin.com/in/julesdupont"
    iconUrl={`${process.env.PUBLIC_URL}/images/linked_in.svg#linkedInIcon`}
    label="LinkedIn"
    {...props}
  />
);

const GitHubButton = props => (
  <StyledSocialMediaButton
    pageUrl="https://github.com/jdupont"
    iconUrl={`${process.env.PUBLIC_URL}/images/github_mark.svg#main`}
    label="GitHub"
    {...props}
  />
);

export { StackOverflowButton, GitHubButton, LinkedInButton };
