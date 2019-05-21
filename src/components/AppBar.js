import React, { Component } from 'react';
import { Grid, AppBar, IconButton, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTrain } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { logout } from '../store/actions';

const StyledToolbar = styled(Toolbar)`
    a {
        color: #FFF;
    }
    a:hover {
        color: #FFF
    }
`;

export class Appbar extends Component {
    
  render() {
    return (
        <AppBar position="static" color="primary">
            <StyledToolbar>
                <Grid
                    justify="space-between"
                    container
                    spacing={24}
                    >
                    <Grid item>
                    <Link to='/' >
                        <IconButton color="inherit">                        
                            <FontAwesomeIcon icon={faHome} />
                        </IconButton>
                    </Link>
                    <Link to='/trains'>
                        <IconButton color="inherit">
                            <FontAwesomeIcon icon={faTrain} />
                        </IconButton>
                    </Link>
                    </Grid>
                    <Button
                        color="inherit"
                        onClick={(e) => this.props.logout()}>
                            logout
                    </Button>
                </Grid>
            </StyledToolbar>
        </AppBar>
    );
  }

}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(Appbar);
