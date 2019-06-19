import React, { useState, useEffect } from 'react';
import {
  Stepper, Step, StepLabel, StepContent, Typography, IconButton, Grid,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { selectTrainline } from '../store/actions';

const CenterContents = styled.div`
    text-align: center;
`;

function StationsInfoStepper(props) {
  const [state, setState] = useState({
    showNext: false,
    activeStepStart: null,
    activeStepEnd: null,
    startStationName: null,
    endStationName: null,
  });

  useEffect(() => {
    if (state.activeStepStart === null) {
      props.selectTrainline(null);
    } else {
      props.selectTrainline(props.label);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeStepStart]);

  const handleClickStart = (index, value) => {
    if (state.activeStepStart !== index) {
      setState({
        ...state,
        activeStepStart: index,
        startStationName: value,
      });
    } else {
      props.selectTrainline(null);
      handleReset('start');
    }
  };

  const handleClickEnd = (index, value) => {
    if (state.activeStepEnd !== index) {
      setState({
        ...state,
        activeStepEnd: index,
        endStationName: value,
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
        startStationName: null,
      });
    }
    if (which === 'end') {
      setState({
        ...state,
        endStationName: null,
        activeStepEnd: null,
      });
    }
  };

  return (
    <React.Fragment>
        <Typography variant='h4'>{props.label}</Typography>
        <Typography variant='caption'>
          {props.disabled ? 'Disabled' : 'Click on the train icon to pick a station'}
        </Typography>
        {
          props.disabled
            ? null
            : <React.Fragment>
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
                                          onClick={handleClickEnd.bind(this, index, station.name)}
                                          disabled={state.activeStepStart === index}
                                        >
                                          <FontAwesomeIcon icon={'train'} />
                                        </IconButton>}>
                                  <Typography variant={state.activeStepEnd === index ? 'h5' : 'body1'}>
                                    {station.name}
                                  </Typography>
                                  {state.activeStepStart === index ? '(start)' : null}
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
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                  {
                    state.showNext
                      ? <IconButton
                          color='secondary'
                          disabled={state.endStationName === null}
                          onClick={handleClickSubmit}>
                          <FontAwesomeIcon icon={'angle-double-right'}/>
                        </IconButton>
                      : <IconButton
                          color='primary'
                          disabled={state.startStationName === null}
                          onClick={handleClickNext}>
                          <FontAwesomeIcon icon={'angle-double-right'}/>
                        </IconButton>
                  }
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='h6'>Start</Typography>
                    <Typography variant='body1'>{state.startStationName}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='h6'>End</Typography>
                    <Typography variant='body1'>{state.endStationName}</Typography>
                  </Grid>
                </Grid>
              </CenterContents>
            </React.Fragment>
        }
    </React.Fragment>
  );
}

const mapDispatchToProps = { selectTrainline };

export default connect(null, mapDispatchToProps)(StationsInfoStepper);
