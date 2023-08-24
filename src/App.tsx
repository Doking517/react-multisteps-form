import { FormEvent, useState } from 'react';
import { BusinessInformation } from './components/BusinessInformation';
import { YourProfile } from './components/YourProfile';
import { useMultistepForm } from './useMultistepForm';

type FormData = {
	firstName: string;
	email: string;
	password: string;
	lastName: string;
	phoneNumber: string;
	confirmPassword: string;
	brandName: string;
	streetAddress: string;
	zipCode: string;
	brandType: string;
	city: string;
	taxIdNumber: string;
	electronical: string;
	beverage: string;
	electronical2: string;
};

const INITIAL_DATA: FormData = {
	firstName: '',
	email: '',
	password: '',
	lastName: '',
	phoneNumber: '',
	confirmPassword: '',
	brandName: '',
	streetAddress: '',
	zipCode: '',
	brandType: '',
	city: '',
	taxIdNumber: '',
	electronical: '',
	beverage: '',
	electronical2: '',
};

function App() {
	const [data, setdata] = useState(INITIAL_DATA);

	// function to update each field of our form using the precedent values and the new values
	function updateFields(fields: Partial<FormData>) {
		setdata((prev) => {
			return { ...prev, ...fields };
		});
	}
	const stepName = ['Your Profile', 'Business Information', 'Additional Users'];
	const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
		useMultistepForm([
			<YourProfile
				{...data}
				updateFields={updateFields}
			/>,
			<BusinessInformation
				{...data}
				updateFields={updateFields}
			/>,
		]);

	function onsubmit(e: FormEvent) {
		e.preventDefault();
		if (!isLastStep) return next();
		console.log(data);
	}

	return (
		<div className="h-[1000px] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center content-center">
			<div className="relative w-[75%] flex h-auto p-14 bg-white items-center justify-center self-center rounded-2xl shadow-xl  m-4">
				<form
					className="w-[70%]"
					onSubmit={onsubmit}
				>
					<div className="absolute top-2 right-2">
						{stepName[currentStepIndex]}/{steps.length}
					</div>

					{step}
					<div className="flex justify-between gap-96 mt-8 absolute bottom-[-4rem] items-center w-auto">
						<button
							type="button"
							className="text-white shadow-2xl flex justify-center mt-5 gap-2 items-center px-3 py-1.5 rounded-md justify-self-center"
						>
							<svg
								fill="#f0f0f0"
								height="16px"
								width="16px"
								version="1.1"
								id="Layer_1"
								viewBox="0 0 404.258 404.258"
								stroke="#f0f0f0"
							>
								<polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 " />
							</svg>
							Back to login
						</button>
						<div className="flex justify-center items-center  gap-5">
							{!isFirstStep && (
								<button
									onClick={back}
									type="button"
									className="text-white shadow-2xl flex justify-center mt-5 gap-2 items-center border-2 border-slate-200 border-solid px-3 py-1.5 rounded-md justify-self-center"
								>
									<svg
										fill="#f0f0f0"
										height="16px"
										width="16px"
										version="1.1"
										id="Layer_1"
										viewBox="0 0 404.258 404.258"
										stroke="#f0f0f0"
										type="button"
									>
										<polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 " />
									</svg>
									Previous Step
								</button>
							)}
							<button
								type="submit"
								className=" mt-5 shadow-2xl  bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-md"
							>
								{isLastStep ? 'finish' : `Next Step`}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
