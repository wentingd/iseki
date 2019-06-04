import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, StepContent, Typography, IconButton,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const CenterContents = styled.div`
    text-align: center;
`;

function StationsInfoStepper(props) {
  const [state, setState] = useState({
    activeStep: null,
    selected: null,
  });

  const handleClick = (index, value) => {
    if (state.activeStep !== index) {
      setState({
        activeStep: index,
        selected: value,
      });
    } else {
      handleReset();
    }
  };

  const handleReset = () => {
    setState({
      activeStep: null,
      selected: null,
    });
  };

  const handleClickNext = () => {
    console.log('next!!');
  };

  return (
    <React.Fragment>
        <Typography variant='h4'>{props.label}</Typography>
        <Typography variant='caption'>Click on the train icon where you want to get on</Typography>
        <Stepper activeStep={state.activeStep} orientation="vertical">
            {
              props.steps.map((station, index) => {
                return (
                  <Step key={`${station.name}-${index}`}>
                  <StepLabel
                      icon={<IconButton
                              color={state.activeStep === index ? 'primary' : 'secondary'}
                                  onClick={handleClick.bind(this, index, station.name)}>
                              <FontAwesomeIcon icon={faTrain} />
                          </IconButton>}>
                      <Typography variant={state.activeStep === index ? 'h6' : 'body1'}>{station.name}</Typography>
                  </StepLabel>
                  <StepContent>
                      <Typography variant="caption">(Getting on here)</Typography>
                  </StepContent>
                  </Step>
                );
              })
            }
        </Stepper>
        <CenterContents>
            <IconButton
                color="primary"
                disabled={state.selected === null}
                onClick={handleClickNext}>
            <FontAwesomeIcon
                icon={faAngleDoubleRight}/>
            </IconButton>
        </CenterContents>
    </React.Fragment>
  );
}

export default StationsInfoStepper;
