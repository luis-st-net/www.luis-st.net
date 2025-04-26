"use client";

import * as Ui from "@/lib/components/ui";
import React, { useEffect, useState } from "react";
import { getContactInformation } from "./actions";
import ContentPane from "@/lib/components/content-pane";
import Link from "next/link";
import { ContactInformation } from "@/lib/types";

export default function () {
	const [contactInfo, setContactInfo] = useState<ContactInformation>({
		name: "Fetching...",
		street: "Fetching...",
		city: "Fetching...",
		country: "Fetching...",
		mail: "Fetching...",
	});
	
	useEffect(() => {
		getContactInformation().then(data => {
			setContactInfo(data);
		});
	}, []);
	
	return (
		<ContentPane defaultColor={true} className="w-4/5 2xl:w-3/5">
			<div className="m-4">
				<h2 className="text-4xl mb-6">
					Imprint
				</h2>
				<div>
					<p className="mb-4">
						{contactInfo.name}
					</p>
					<p className="mb-4">
						{contactInfo.street}<br/>
						{contactInfo.city}<br/>
						{contactInfo.country}
					</p>
				</div>
				<div className="mt-12">
					<p className="mb-4">
						<strong>Represented by:</strong><br/>
						<span className="inline-block border-l-custom-black dark:border-l-white ml-1.5 mt-1.5 p-0.5 pl-2 border border-t-0 border-r-0 border-b-0">
							{contactInfo.name}
						</span>
					</p>
					
					<p className="mb-4">
						<strong>Contact:</strong><br/>
						<span className="inline-block border-l-custom-black dark:border-l-white ml-1.5 mt-1.5 p-0.5 pl-2 border border-t-0 border-r-0 border-b-0">
							Mail:{" "}
							<Link href={"mailto:" + contactInfo.mail} className="text-custom-blue underline">
									{contactInfo.mail}
							</Link>
						</span>
					</p>
				</div>
				<div className="mt-12">
					<h4 className="text-xl mb-4">
						<strong>Disclaimer</strong>
					</h4>
					<Ui.Accordion type="single" collapsible>
						<DisclaimerItem title="Liability for content" index={0}>
							<p className="mb-4">
								The contents of my website have been created with the greatest care. However, I cannot assume any liability for the correctness,
								completeness and topicality of the contents. As the operator of this private website, I am responsible for my own content in accordance
								with general legislation. However, as a private individual, I am not obliged to monitor transmitted or stored third-party information
								or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with
								general legislation remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a
								specific infringement. As soon as I become aware of such infringements, I will remove this content immediately.
							</p>
						</DisclaimerItem>
						<DisclaimerItem title="Liability for links" index={1}>
							<p className="mb-4">
								My website contains links to external websites of third parties over whose content I have no influence. Therefore, I cannot accept
								any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content
								of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not
								recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without
								concrete evidence of an infringement. If I become aware of any legal infringements, I will remove such links immediately.
							</p>
						</DisclaimerItem>
						<DisclaimerItem title="Copyright" index={2}>
							<p className="mb-4">
								The content and works on this site created by me as the site operator are subject to German copyright law. Reproduction, editing,
								distribution and any kind of exploitation outside the limits of copyright law require my written consent as author or creator.
								Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not
								created by me as the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such.
								Should you nevertheless become aware of a copyright infringement, please inform me accordingly.
								If I become aware of any infringements, I will remove such content immediately.
							</p>
						</DisclaimerItem>
						<DisclaimerItem title="Privacy policy" index={3}>
							<p className="mb-4">
								The use of my website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or e-mail addresses)
								is collected on my website, this is always done on a voluntary basis. This data will not be passed on to third parties without your express consent.
								I would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) can have security gaps.
								Complete protection of data against access by third parties is not possible. The use of contact data published in the context of the imprint
								obligation by third parties for sending unsolicited advertising and information materials is hereby expressly prohibited.
								As the operator of this website, I expressly reserve the right to take legal action in the event of the unsolicited sending
								of advertising information, such as spam e-mails.
							</p>
						</DisclaimerItem>
					</Ui.Accordion>
				</div>
			</div>
		</ContentPane>
	);
}

function DisclaimerItem(
	{ title, index, children }: { title: string, index: number, children: React.ReactNode },
) {
	return (
		<Ui.AccordionItem value={"item-" + index}>
			<Ui.AccordionTrigger>
				<strong>
					{title}
				</strong>
			</Ui.AccordionTrigger>
			<Ui.AccordionContent>
				{children}
			</Ui.AccordionContent>
		</Ui.AccordionItem>
	);
}
