interface StepProps extends React.InputHTMLAttributes<HTMLInputElement> {
	number: number;
	title: string;
	text: string;
}

export function Step({ number, title, text }: StepProps) {
	return (
		<div className="flex flex-col justify-center items-center  content-center w-[55%] pb-8">
			<h3 className="text-[#A8B7DA]  text-lg">Step {number}</h3>
			<h1 className="font-semibold text-3xl text-[#516992]">{title}</h1>
			<p className="font-medium text-[#5E6A85] text-center">{text}</p>
		</div>
	);
}
