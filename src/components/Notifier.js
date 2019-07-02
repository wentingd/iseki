import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  IconButton, Icon, Snackbar, SnackbarContent,
} from '@material-ui/core';
import {
  red, blue, amber, green,
} from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconVariants = {
  success: 'check-circle',
  warning: 'exclamation-circle',
  error: 'exclamation-triangle',
  info: 'info',
};

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: red[700],
  },
  info: {
    backgroundColor: blue[700],
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function Notifier(props) {
  const classes = useStyles();
  const {
    message, variant, isOpen, onClose,
  } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpen}
      autoHideDuration={12000}
      onClose={onClose}
    >
      <SnackbarContent
        aria-describedby='snackbar-notifier'
        className={classes[variant]}
        message={
          <span id='snackbar' className={classes.message}>
            <Icon color='inherit'>
              <FontAwesomeIcon
                icon={iconVariants[variant]}
                variant='outlined'
                className={classes.iconVariant}
              />
            </Icon>
            {message}
          </span>
        }
        action={[
          <IconButton key='close' aria-label='Close' color='inherit' onClick={onClose}>
            <Icon>
              <FontAwesomeIcon icon='times' className={classes.iconVariant} />
            </Icon>
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}

export default Notifier;
