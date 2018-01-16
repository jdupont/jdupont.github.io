const topLevelGridStyles = theme => ({
  padding: theme.spacing.unit,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: 56 + theme.spacing.unit,
});

export { topLevelGridStyles };
