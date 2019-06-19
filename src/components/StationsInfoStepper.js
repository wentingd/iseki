import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, StepContent, Typography, IconButton,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const CenterContents = styled.div`
    text-align: center;
`;

function StationsInfoStepper(props) {
  const [state, setState] = useState({
    showNext: false,
    activeStepStart: null,
    selectedStart: null,
    selectedEnd: null,
    activeStepEnd: null,
  });

  const handleClickStart = (index, value) => {
    if (state.activeStepStart !== index) {
      setState({
        ...state,
        activeStepStart: index,
        selectedStart: value,
      });
    } else {
      handleReset('start');
    }
  };

  const handleClickEnd = (index, value) => {
    if (state.activeStepEnd !== index) {
      setState({
        ...state,
        activeStepEnd: index,
        selectedEnd: value,
      });
    } else {
      handleReset('end');
    }
  };

  const handleClickNext = () => {
    setState({
      ...state,
      showNext: true,
    });
  };

  const handleClickSubmit = () => {
    console.log('submit to backend');
  };

  const handleReset = (which) => {
    if (which === 'start') {
      setState({
        ...state,
        activeStepStart: null,
        selectedStart: null,
      });
    }
    if (which === 'end') {
      setState({
        ...state,
        selectedEnd: null,
        activeStepEnd: null,
      });
    }
  };

  return (
    <React.Fragment>
        <Typography variant='h4'>{props.label}</Typography>
        <Typography variant='caption'>Click on the train icon to pick a station</Typography>
        {
          state.showNext
            ? (<Stepper activeStep={state.activeStepEnd} orientation="vertical">
                {
                  props.steps.map((station, index) => {
                    return (
                      <Step key={`${station.name}-${index}`}>
                        <StepLabel
                            icon={<IconButton
                                      color={state.activeStepEnd === index ? 'secondary' : 'default'}
                                      onClick={handleClickEnd.bind(this, index, station.name)}>
                                    <FontAwesomeIcon icon={'train'} />
                                  </IconButton>}>
                            <Typography variant={state.activeStepEnd === index ? 'h6' : 'body1'}>
                              {station.name}
                            </Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="caption">(Getting off here)</Typography>
                        </StepContent>
                      </Step>
                    );
                  })
                }
            </Stepper>)
            : (<Stepper activeStep={state.activeStepStart} orientation="vertical">
                {
                  props.steps.map((station, index) => {
                    return (
                      <Step key={`${station.name}-${index}`}>
                        <StepLabel
                            icon={<IconButton
                                    color={state.activeStepStart === index ? 'primary' : 'default'}
                                      onClick={handleClickStart.bind(this, index, station.name)}>
                                    <FontAwesomeIcon icon='train' />
                                  </IconButton>}>
                            <Typography variant={state.activeStepStart === index ? 'h6' : 'body1'}>
                              {station.name}
                            </Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="caption">(Getting on here)</Typography>
                        </StepContent>
                      </Step>
                    );
                  })
                }
            </Stepper>
            )
        }
        <CenterContents>
          <Typography>Start: {state.selectedStart}</Typography>
          <Typography>End: {state.selectedEnd}</Typography>
          {
            state.showNext
              ? <IconButton
                  color='secondary'
                  disabled={state.selectedEnd === null}
                  onClick={handleClickSubmit}>
                  <FontAwesomeIcon icon={'angle-double-right'}/>
                </IconButton>
              : <IconButton
                  color='primary'
                  disabled={state.selectedStart === null}
                  onClick={handleClickNext}>
                  <FontAwesomeIcon icon={'angle-double-right'}/>
                </IconButton>
          }
        </CenterContents>
    </React.Fragment>
  );
}

export default StationsInfoStepper;
