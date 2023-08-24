import Input from './Input';
import { Step } from './StepBannerContent';

type UserData = {
	firstName: string;
	email: string;
	password: string;
	lastName: string;
	phoneNumber: string;
	confirmPassword: string;
};
type YourProfileProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void;
};

export function YourProfile({
	firstName,
	email,
	password,
	lastName,
	phoneNumber,
	confirmPassword,
	updateFields,
}: YourProfileProps) {
	return (
		<div className="flex flex-col items-center w-full">
			<Step
				number={1}
				title={'Your Profile'}
				text={
					'Enter the login information for your account. You will be able to create additional users after registering.'
				}
			/>
			<div className="flex gap-6 h-auto w-full">
				<div className=" flex flex-col gap-3 h-auto w-full">
					<Input
						label={'first Name*'}
						id={'firstName'}
						type={'text'}
						required
						placeholder="Input Your First Name"
						value={firstName}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ firstName: e.target.value })
						}
					/>

					<Input
						label={'Email*'}
						id={'email'}
						type={'email'}
						required
						placeholder="Input Your Email"
						value={email}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ email: e.target.value })
						}
					/>
					<Input
						label={'Password*'}
						id={'password'}
						type={'password'}
						required
						placeholder="Create Password"
						value={password}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ password: e.target.value })
						}
					/>
				</div>
				<div className="flex flex-col gap-3 w-full">
					<Input
						label={'Last Name*'}
						id={'lastName'}
						type={'text'}
						required
						placeholder="Input Your Last Name"
						value={lastName}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ lastName: e.target.value })
						}
					/>
					<Input
						label={'Phone Number*'}
						id={'phoneNumber'}
						type={'text'}
						required
						placeholder="Input Your Phone Number"
						value={phoneNumber}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ phoneNumber: e.target.value })
						}
					/>
					<Input
						label={'confirm Password*'}
						id={'passConf'}
						type={'password'}
						required
						placeholder="Confirm Your Password"
						value={confirmPassword}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ confirmPassword: e.target.value })
						}
					/>
				</div>
			</div>
		</div>
	);
}
