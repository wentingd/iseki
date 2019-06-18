import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Card, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)`
    padding: 2em;
    background: grey;
`;

function ListContentsList(props) {
  const [state, setState] = useState(props);

  useEffect(() => {
    setState(props);
  }, [props]);

  const handleClickFav = (e) => {
    console.log(e);
  };

  return (
        <StyledCard>
          <List subheader={
            <ListSubheader component="div" color="primary">
              {props.label}
            </ListSubheader>
          }>
            {
              state.listContents && state.listContents.length > 0
                ? state.listContents.map(
                  (item, index) => (
                  <ListItem key={index} button>
                        <ListItemText>
                        {item.name}
                        </ListItemText>
                        {item.fav
                          ? <ListItemIcon
                              onClick={handleClickFav}>
                              <FontAwesomeIcon icon={faStar} />
                          </ListItemIcon>
                          : null}
                  </ListItem>),
                )
                : (<Typography>
                  No items to be displayed in this list.
                </Typography>)
            }
          </List>
        </StyledCard>
  );
}

export default connect()(ListContentsList);
