import React from "react";

type Props = {
	children: React.ReactNode;
	width?: string;
};

export default function PotentialContainer({ children, width }: Props) {
	return (
		<div
			className={`${
				width ? width : "w-auto"
			} h-auto px-3 py-[6px] rounded-[12px] border border-primary-lightGrey bg-primary-lightestGrey shadow-[0px] `}
		>
			{children}
		</div>
	);
}
