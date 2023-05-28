import { useState } from "react";

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i, e) {
        
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
    };
}