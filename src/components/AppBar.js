import React, { Component } from 'react';
import { AppBar, IconButton, Button, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { logout } from '../store/actions';

const RightPulledButton = styled(Button)`
    marginLeft: -12,
    marginRight: 20
`

export class Appbar extends Component {
    
    render() {
        return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton
                    color="inherit">
                    <FontAwesomeIcon icon={faTrain} />
                </IconButton>
                <RightPulledButton
                    color="inherit"
                    onClick={(e) => this.props.logout()}>
                        logout
                </RightPulledButton>
            </Toolbar>
        </AppBar>
        );
    }

}

const mapDispatchToProps = { logout };
  
export default connect(null, mapDispatchToProps)(Appbar);