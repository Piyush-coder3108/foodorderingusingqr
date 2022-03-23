import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RestaurantForm from "../components/RestaurantForm";
import MenuAdd from "../components/MenuAdd";
import VerifyCno from "../components/VerifyCno";

const steps = ["Enter Details", "Add Menu", "Verify Mobile number"];

export default function RestaurantRegistrer() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        {activeStep == 0 ? (
                            <RestaurantForm />
                        ) : activeStep == 1 ? (
                            <MenuAdd />
                        ) : (
                            <VerifyCno />
                        )}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        {/* {isStepOptional(activeStep) && (
                            <Button
                                color="inherit"
                                onClick={handleSkip}
                                sx={{ mr: 1 }}
                            >
                                Skip
                            </Button>
                        )} */}

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
