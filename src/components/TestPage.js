import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function TestPage(props) {
  const handleClick = (e) => {
    console.log('Hello from handleClick');
  };

  return (
      <div>
        <Button color="primary" onClick={handleClick}>
          Primary
        </Button>
      </div>
  );
}

export default withStyles(styles)(TestPage);
