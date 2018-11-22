import React, { Component } from 'react';
import { Card, Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    padding: 1em;
`

class Profile extends Component {

    render() {
        return (
            <StyledCard>
                <Avatar>
                    {this.props.username.substring(0,2)}
                </Avatar>
                <Typography variant="body2">
                    logged in as : {this.props.username}
                </Typography>
            </StyledCard>
        );
    }
}

export default Profile;