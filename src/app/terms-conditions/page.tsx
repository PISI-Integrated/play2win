import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="pb-32">
			<div className="flex flex-col gap-4">
				<h1 className="text-white text-[32px] font-extrabold leading-[28px]">
					Terms & Conditions
				</h1>
				<p className="text-white text-base leading-5">{`These Terms and Conditions ("Terms") govern your use of the gaming services provided by Play2Win Ltd ("we," "us," or "our"), located at 155 Broadway Marina, as well as any related websites, mobile applications, and platforms operated by us.`}</p>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						1. Acceptance of Terms
					</h2>
					<p className="text-white text-base leading-5">{`By accessing or using our gaming services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our gaming services.`}</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						2. Eligibility
					</h2>
					<p className="text-white text-base leading-5">{`You must be at least 18 years old to use our gaming services. By accessing or using our gaming services, you represent and warrant that you are of legal age to form a binding contract with us.`}</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						3. Account Registration
					</h2>
					<p className="text-white text-base leading-5">{`You may be required to create an account to access certain features of our gaming services. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary to keep it accurate, current, and complete.`}</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						4. Use of Services
					</h2>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">4.1. License: </span>
						{`Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use our gaming services for your personal entertainment purposes.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">4.2. Prohibited Activities: </span>
						{`You agree not to engage in any of the following prohibited activities: a. Violating any applicable laws or regulations; b. Interfering with or disrupting the operation of our gaming services; c. Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation with a person or entity; d. Using our gaming services for any illegal or unauthorised purpose; e. Circumventing any security measures or access controls of our gaming services; f. Collecting or harvesting any information from our gaming services without our express written consent.`}
					</p>
					<p className="pl-4 text-white text-base leading-5">
						<span className="font-bold">4.3. Compliance: </span>
						You agree to comply with all applicable laws, regulations, and
						third-party agreements in connection with your use of our gaming
						services.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						5. Intellectual Property
					</h2>
					<p className="text-white text-base leading-5">
						All content and materials available on our gaming services,
						including but not limited to text, graphics, logos, images, audio
						clips, and video clips, are owned by us or our licensors and are
						protected by copyright, trademark, and other intellectual property
						laws..
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						6. Disclaimer of Warranties
					</h2>
					<p className="text-white text-base leading-5">
						OUR GAMING SERVICES ARE PROVIDED ON AN &quot;AS-IS&quot; AND
						&quot;AS-AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND,
						EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING,
						BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
						FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						7. Limitation of Liability
					</h2>
					<p className="text-white text-base leading-5">
						IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
						SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN
						CONNECTION WITH YOUR USE OF OUR GAMING SERVICES, WHETHER BASED ON
						WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL
						THEORY.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						8. Indemnification
					</h2>
					<p className="text-white text-base leading-5">
						You agree to indemnify, defend, and hold harmless P.E GAMING LIMITED
						and its officers, directors, employees, and agents from and against
						any and all claims, liabilities, damages, losses, costs, expenses,
						or fees (including reasonable attorneys&apos; fees) arising out of
						or in connection with your use of our gaming services or your
						violation of these Terms.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						9. Governing Law
					</h2>
					<p className="text-white text-base leading-5">
						These Terms shall be governed by and construed in accordance with
						the laws of NIGERIA, without regard to its conflict of laws
						principles.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-base font-bold leading-5">
						10. Changes to Terms
					</h2>
					<p className="text-white text-base leading-5">
						We reserve the right to modify or revise these Terms at any time in
						our sole discretion. Any changes will be effective immediately upon
						posting the updated Terms on our website or through other
						communication channels. Your continued use of our gaming services
						following the posting of changes constitutes your acceptance of such
						changes.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-xl font-extrabold leading-5">
						Contact Us
					</h2>
					<p className="text-white text-base leading-5">
						If you have any questions or concerns about these Terms, please
						contact us at{" "}
						<span className="font-extrabold">[+2347057817249]</span>. By using
						our gaming services, you agree to be bound by these Terms. If you do
						not agree to these Terms, you may not access or use our gaming
						services.
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
