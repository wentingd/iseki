import React from 'react';
import { connect } from 'react-redux';
import {
  Card, List, ListItem, ListItemText, ListSubheader, ListItemIcon,
} from '@material-ui/core';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)`
    padding: 2em;
    background: grey;
`;

function ListContentsList(props) {
  const handleClickFav = (e) => {
    console.log(e);
  };

  return (<StyledCard>
            <List subheader={<ListSubheader component="div" color="primary">{props.label}</ListSubheader>}>
                {
                  props.listContents.map(
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
                }
            </List>
        </StyledCard>
  );
}

export default connect()(ListContentsList);
