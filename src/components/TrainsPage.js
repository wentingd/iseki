import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid } from '@material-ui/core';
import styled from 'styled-components'
import StationsInfoStepper from './StationsInfoStepper';

const StyledCard = styled(Card)`
    padding: 1em;
    width: 500px;
`

export class TrainsPage extends Component {

    render() {
        const allTrainData = this.props.allTrainData ? this.props.allTrainData : null;
        return (
            <div style={{ padding: 20 }}>
            <Grid container spacing={40}>
                {
                    allTrainData.map(
                        (trainline, index) => (
                            <Grid item key={index}>
                                <StyledCard>
                                    <StationsInfoStepper label={trainline.name} steps={trainline.stations}/>
                                </StyledCard>
                            </Grid>
                        )
                    )
                }
            </Grid>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        allTrainData: state.allTrainData
	};
}
  
export default connect(mapStateToProps)(TrainsPage);