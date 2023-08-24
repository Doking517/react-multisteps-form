import { ReactElement, useState } from 'react';

export function useMultistepForm(steps: ReactElement[]) {
	const [currentStepIndex, setcurrentStepIndex] = useState(0);

	// function for the next button
	function next() {
		setcurrentStepIndex((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	}
	// function for the back button
	function back() {
		setcurrentStepIndex((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	}
	// this funvtion help's us to go to a specific part of our form
	function goTo(index: number) {
		setcurrentStepIndex(index);
	}

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
		goTo,
		next,
		back,
		steps,
	};
}
