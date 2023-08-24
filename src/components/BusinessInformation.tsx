import Input from './Input';
import { Step } from './StepBannerContent';

type BusinessInformationData = {
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

type BusinessInformationProps = BusinessInformationData & {
	updateFields: (fields: Partial<BusinessInformationData>) => void;
};

export function BusinessInformation({
	brandName,
	streetAddress,
	zipCode,
	brandType,
	city,
	taxIdNumber,
	electronical,
	beverage,
	electronical2,
	updateFields,
}: BusinessInformationProps) {
	return (
		<div>
			<div className="flex flex-col items-center w-full">
				<Step
					number={2}
					title={'Business Information'}
					text={'Please, enter information about your company'}
				/>
			</div>
			<h2 className="text-[#67AFFB] mb-2">GENERAL INFORMATION</h2>
			<div className="flex gap-6 h-auto w-full">
				<div className=" flex flex-col gap-3 h-auto w-full">
					<Input
						label={'Brand Name*'}
						id={'brandName'}
						type={'text'}
						required
						placeholder="Input Your Brand Name"
						value={brandName}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ brandName: e.target.value })
						}
					/>

					<Input
						label={'Street Address*'}
						id={'streetAddress'}
						type={'text'}
						required
						placeholder="Input Your Street Address"
						value={streetAddress}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ streetAddress: e.target.value })
						}
					/>
					<Input
						label={'Zip Code*'}
						id={'zipCode'}
						type={'text'}
						required
						placeholder="Input Zip Code"
						value={zipCode}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ zipCode: e.target.value })
						}
					/>
				</div>
				<div className="flex flex-col gap-3 w-full">
					<Input
						label={'Brand Type*'}
						id={'brandType'}
						type={'text'}
						required
						placeholder="Input Your Brand Type"
						value={brandType}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ brandType: e.target.value })
						}
					/>
					<Input
						label={'City*'}
						id={'city'}
						type={'text'}
						required
						placeholder="Input City"
						value={city}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ city: e.target.value })
						}
					/>
					<Input
						label={'Tax ID Number*'}
						id={'inputTaxIDNumber'}
						type={'text'}
						required
						placeholder="Input Tax ID Number"
						value={taxIdNumber}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ taxIdNumber: e.target.value })
						}
					/>
				</div>
			</div>
			<h2 className="text-[#67AFFB] mt-6">DOCUMENTS</h2>
			<p>
				Once the following documents are signed, you'll be ready to get started
			</p>
			<div>
				<span>
					<Input
						label={''}
						id={''}
						type={'text'}
						required
						placeholder="Electronically sign the agreement"
						value={electronical}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ electronical: e.target.value })
						}
					/>
				</span>

				<Input
					label={''}
					id={''}
					type={'text'}
					required
					placeholder="No adult beverage Kroger market supplier waiver and release"
					value={beverage}
					onChange={(e: { target: { value: string } }) =>
						updateFields({ beverage: e.target.value })
					}
				/>
			</div>
			<h2 className="text-[#67AFFB] mt-6">COI PDF UPLOAD</h2>
			<p>
				Once the following documents are signed, you'll be ready to get started
			</p>
			<div>
				<span>
					<Input
						label={''}
						id={''}
						type={'text'}
						required
						placeholder="Electronically sign the agreement"
						value={electronical2}
						onChange={(e: { target: { value: string } }) =>
							updateFields({ electronical2: e.target.value })
						}
					/>
				</span>
			</div>
		</div>
	);
}
