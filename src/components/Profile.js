import React from 'react';
import { Card, Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    padding: 1em;
`;

function Profile(props) {
  return (
    <StyledCard>
        <Avatar>
          {props.email ? props.email.substring(0, 2) : 'user'}
        </Avatar>
        <Typography variant="body2">
            Logged in as : {props.email}
        </Typography>
    </StyledCard>
  );
}

export default Profile;
