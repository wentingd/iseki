import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, List, ListItem, ListItemText, ListSubheader, ListItemIcon } from '@material-ui/core';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)`
    padding: 2em;
    background: grey;
`;

export class listContentsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      label: '',
      listContents: [],
    };
  }

  componentDidMount(nextProps){
    this.setState({
      label: this.props.label,
      listContents: this.props.listContents,
    });
  }

  handleClickFav(item, type){
    console.log(item, type);
  }

  render() {
    return (
            <StyledCard>
                <List subheader={<ListSubheader component="div" color="primary">{this.props.label}</ListSubheader>}>
                    {
                        this.state.listContents.map(
                          (item, index) => 
                            <ListItem key={index} button>
                                <ListItemText>
                                {item.name}
                                </ListItemText>
                                {
                                    item.fav ?
                                    <ListItemIcon
                                        onClick={this.handleClickFav.bind(this, item, this.props.label)}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </ListItemIcon> : null
                                }
                            </ListItem>,
                        )
                    }
                </List>
            </StyledCard>
    );
  }
}
  
export default connect()(listContentsList);
