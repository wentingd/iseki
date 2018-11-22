import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Paper } from '@material-ui/core';
import styled from 'styled-components'

const mockTrainData = [
    {name:'tokaidou', stations: [{ name:'totsuka' }, { name:'yokohama' }, { name:'kawasaki' }]},
    {name:'yokosuka', stations: [{ name:'totsuka' }, { name:'east totsuka' }]},
    {name:'hakone touzan', stations: [{ name:'odawara' }, { name:'hakone yumoto' }]}
];

const StyledPaper = styled(Paper)`
    padding: 2em;
    background: indigo;
`

export class TrainsPage extends Component {

    lineInfoPaper = (line) => 
        <StyledPaper>
            <Typography variant='h3'>{line.name}</Typography>
            {
                line.stations.map(station => <Button>{station.name}</Button>)
            }
        </StyledPaper>

    render() {
        return (
            mockTrainData.map(
                line => this.lineInfoPaper(line)
            )
        )
    }
}
  
export default connect()(TrainsPage);