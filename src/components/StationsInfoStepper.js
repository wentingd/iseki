import React, { Component } from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const CenterContents = styled.div`
    text-align: center;
`;

export class StationsInfoStepper extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeStep: null,
            selected: null
        }
    }

    handleClick (index, value, event) {
        if (this.state.activeStep !== index) {
            this.setState({
                activeStep: index,
                selected: value
            });
        } else {
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            activeStep: null,
            selected: null
        });
    };

    handleClickNext() {
        console.log('next!!')
    };
    
    render(){
        const steps = this.props.steps;
        const activeStep = this.state.activeStep;
        return(
            <div>
                <Typography variant='h4'>{this.props.label}</Typography>
                <Typography variant='body2'>Click on the train icon where you want to get on</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {
                        steps.map((station, index) => {
                            return (
                                <Step key={station.name + '-' + index}>
                                <StepLabel
                                    icon={<IconButton
                                            color={this.state.activeStep === index ? "primary" : "secondary"}
                                                onClick={this.handleClick.bind(this, index, station.name)}>
                                            <FontAwesomeIcon icon={faTrain} />
                                        </IconButton>}>
                                    <Typography variant={this.state.activeStep === index ? "h6" : "body1"}>{station.name}</Typography>
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
                        disabled={this.state.selected === null ? true : false}>
                    <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        onClick={this.handleClickNext.bind(this)}/>
                    </IconButton>
                </CenterContents>
            </div>
        )
    }

}

export default StationsInfoStepper;