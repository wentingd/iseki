import React from 'react';
import { Card, Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    padding: 1em;
`;

function Profile(props) {
  console.log(props);
  return (
    <StyledCard>
        <Avatar>
          user
            {/* {props.email ? 'lala' : props.email.substring(0, 2)} */}
        </Avatar>
        <Typography variant="body2">
            Logged in as : {props.email}
        </Typography>
    </StyledCard>
  );
}

export default Profile;
