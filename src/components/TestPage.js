import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


export class TestPage extends Component {
  constructor(props){
    super();
  }

    handleClick = () => {
      console.log('Hello from handleClick');
    }

    render() {
      const { classes } = this.props;
      return (
          <div>
            <Button color="primary" className={classes.button} onClick={this.handleClick()}>
              Primary
            </Button>
          </div>
      );
    }
}

export default withStyles(styles)(TestPage);
