import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="pb-32">
			<div className="flex flex-col gap-4">
				<h1 className="text-white text-[32px] font-extrabold leading-[28px]">
					Privacy Policy
				</h1>
				<p className="text-white text-base leading-5">{`P.E GAMING LIMITED ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your information when you use our gaming services.`}</p>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						1. Information We Collect
					</h2>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">1.1. Personal Information: </span>
						{` We may collect personal information such as your name, email address, phone number, and billing information when you register for an account or make purchases through our gaming services.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">1.2. Usage Information: </span>
						{` We automatically collect information about your interactions with our gaming services, including your IP address, device information, browser type, pages visited, and actions taken.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">
							1.3. Cookies and Similar Technologies:{" "}
						</span>
						We use cookies and similar technologies to collect information about
						your preferences and activities on our gaming platform.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						2. How We Use Your Information
					</h2>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">2.1. Providing Services: </span>
						{`We use the information we collect to provide and improve our gaming services, including account management, customer support, and personalized gaming experiences.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">2.2. Communication: </span>
						{`We may use your contact information to communicate with you about your account, updates to our services, promotions, and other relevant information.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">2.3. Analytics: </span>
						We analyze usage data to understand how users interact with our
						gaming platform, optimize performance, and identify trends.
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">2.4. Legal Compliance: </span>
						We may use your information to comply with legal obligations,
						enforce our terms of service, and protect the rights, property, or
						safety of our users and our company.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						3. Information Sharing
					</h2>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">
							3.1. Third-Party Service Providers:{" "}
						</span>
						{`We may share your information with third-party service providers who assist us in operating our gaming platform, such as payment processors, hosting providers, and analytics services.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">3.2. Legal Requirements: </span>
						{`We may disclose your information when required by law or in response to valid legal requests, such as court orders or subpoenas.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">3.3. Business Transfers: </span>
						In the event of a merger, acquisition, or sale of all or a portion
						of our assets, your information may be transferred as part of the
						transaction.
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">2.4. Legal Compliance: </span>
						We may use your information to comply with legal obligations,
						enforce our terms of service, and protect the rights, property, or
						safety of our users and our company.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						4. Your Choices
					</h2>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">4.1. Account Information: </span>
						{`You can update or delete your account information by accessing your account settings within our gaming platform.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">4.2. Cookies: </span>
						{`You can manage your cookie preferences through your browser settings. Please note that disabling cookies may impact the functionality of our gaming services.`}
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						5. Data Security
					</h2>
					<p className="text-white text-base leading-5">{`We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.`}</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						6. Children&apos;s Privacy
					</h2>
					<p className="text-white text-base leading-5">{`Our gaming services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.`}</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						7. Updates to this Privacy Policy
					</h2>
					<p className="text-white text-base leading-5">{`We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.`}</p>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-white text-xl font-extrabold leading-5">
						Contact Us
					</h2>
					<p className="text-white text-base leading-5">
						If you have any questions or concerns about these Terms, please
						contact us at{" "}
						<span className="font-extrabold">[+2347057817249]</span>.
					</p>
					<p className="text-white text-base leading-5">
						If you have any questions or concerns about this Privacy Policy or
						our data practices, please contact us atIf you have any questions or
						concerns about this Privacy Policy or our data practices, please
						contact us at{" "}
						<span className="font-extrabold">[+2347057817249]</span>.
					</p>
					<p className="text-white text-base leading-5">
						By using our gaming services, you consent to the collection, use,
						and disclosure of your information as described in this Privacy
						Policy.
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
