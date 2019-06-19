import React from 'react';
import { connect } from 'react-redux';
import { Card, Grid } from '@material-ui/core';
import styled from 'styled-components';
import StationsInfoStepper from './StationsInfoStepper';

const StyledCard = styled(Card)`
    padding: 1em;
    width: 500px;
`;

function TrainsPage(props) {
  return (
          <div style={{ padding: 20 }}>
          <Grid container spacing={2}>
              {
                (props.allTrainData || []).map((trainline, index) => (
                  <Grid item key={index}>
                    <StyledCard>
                      <StationsInfoStepper
                        label={trainline.name}
                        steps={trainline.stations}
                        disabled={props.selected.trainline ? props.selected.trainline !== trainline.name : false}
                      />
                    </StyledCard>
                  </Grid>))
              }
          </Grid>
      </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    allTrainData: state.allTrainData,
    selected: state.selected,
  };
};

export default connect(mapStateToProps)(TrainsPage);
