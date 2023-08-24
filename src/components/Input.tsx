const Input = ({ ...props }) => {
	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={props.id}
				className="text-[#727E95]"
			>
				{props.label}
			</label>
			<input
				className="rounded-md h-10 placeholder-[#BDCBE0] p-6 border-solid border-2 border-[#AEBBDC]"
				id={props.id}
				type={props.type}
				name=""
				{...props}
			/>
		</div>
	);
};

export default Input;
