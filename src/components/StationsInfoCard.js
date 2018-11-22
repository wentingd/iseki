import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Paper, Card, List, ListItem, ListItemText, ListItemIcon, ListSubheader } from '@material-ui/core';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)`
    padding: 2.5em;
    background: grey;
`

export class StationsInfoCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            label: '',
            stations: []
        }
    }

    componentDidMount(nextProps){
        this.setState({
            label: this.props.label,
            stations: this.props.stations
        })
    }

    render() {
        return (
            <StyledCard>
                <Typography component='h4' variant='h4'>
                    {this.state.label}
                </Typography>
                <List>
                    {
                        this.state.stations.map(
                            station => 
                            <ListItem button>
                                <ListItemText>
                                {station.name}
                                </ListItemText>
                                {
                                    station.fav ?
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faStar} />
                                    </ListItemIcon> : null
                                }
                            </ListItem>
                        )
                    }
                </List>
            </StyledCard>
        )
    }
}
  
export default connect()(StationsInfoCard);