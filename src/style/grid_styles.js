const topLevelGridStyles = theme => ({
  padding: theme.spacing.unit * 2,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: 56,
});

export { topLevelGridStyles };
