"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
	children: JSX.Element;
};

const Reveal = ({ children }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);
	return (
		<div ref={ref}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{
					duration: 0.5,
					delay: 0.25,
					staggerChildren:0.25
				}}
			>
				{children}
			</motion.div>
			{/* <motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{
					duration: 0.5,
					ease: "easeIn",
				}}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "#f002ee",
					zIndex: 20,
				}}
				className=""
			/> */}
		</div>
	);
};

export default Reveal;
