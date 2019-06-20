import React from 'react';
import {
  Grid, AppBar, IconButton, Button, Toolbar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import useReactRouter from 'use-react-router';
import { logout } from '../store/actions';

const StyledToolbar = styled(Toolbar)`
    a {
        color: #FFF;
    }
    a:hover {
        color: #FFF
    }
`;

function Appbar(props) {
  // eslint-disable-next-line no-shadow
  const { history } = useReactRouter();

  const onClickLogout = (e) => {
    props.logout();
    history.push('/');
  };

  return (
    <AppBar position='static' color='primary'>
        <StyledToolbar>
            <Grid
                justify='space-between'
                container
                spacing={6}
                >
                <Grid item>
                <Link to='/' >
                    <IconButton color='inherit'>
                        <FontAwesomeIcon icon='home' />
                    </IconButton>
                </Link>
                <Link to='/trains'>
                    <IconButton color='inherit'>
                        <FontAwesomeIcon icon='train' />
                    </IconButton>
                </Link>
                </Grid>
                <Button
                    color='inherit'
                    onClick={onClickLogout}>
                    logout
                </Button>
            </Grid>
        </StyledToolbar>
    </AppBar>
  );
}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(Appbar);
