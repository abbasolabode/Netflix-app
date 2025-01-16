import Accordion from "./Accordion";
import { useState } from "react";

const accordions = [
	{
		title: "What is Netflix?",
		content1:
			"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
		content2:
			"You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
		contentStyle1:
			"w-[17.4rem] text-[1rem] font-medium font-poppins text-[#F4F4F4] md:text-[1rem] md:w-[40rem] mobileMedium:w-[21.75rem]  bgScreen:text-[1.3rem] bgScreen:w-[70.35rem] bgScreen:font-normal bgScreen:pl-[2rem]",
		contentStyle2:
			"mt-4 w-[18.3rem] text-[1rem] font-medium font-poppins text-[#F4F4F4] md:text-[1rem] md:w-[39.5rem] mobileMedium:w-[20.75rem]  bgScreen:pl-[2rem]  bgScreen:text-[1.3rem] bgScreen:w-[72.35rem] ",
		contentContainerStyle:
			"min-h-[20rem] border-t border-t-black  px-5 py-5 md:min-h-[10rem] bgScreen:w-[74.125rem]",
		firstContainerStyle:
			"w-[22rem] bg-[#2D2D2D] md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		secondContainerStyleForHeaderAndSpan:
			"w-[22rem] min-h-[4rem]  flex items-center justify-between md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		h2Style:
			"font-medium font-poppins text-[1.1rem] text-[#F4F4F4] ml-4 bgScreen:text-[1.5rem]",
		spanStyle:
			"text-[1.7rem]  flex justify-end w-[5rem] mr-4 text-[#F4F4F4] bgScreen:text-[3rem]",
	},

	{
		title: "How much does Netflix cost?",
		content1:
			"	Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.",
		contentStyle1:
			"font-poppins font-medium w-[17.5rem] md:text-[1rem] md:w-[39rem] mobileMedium:w-[21rem]  bgScreen:text-[1.3rem] bgScreen:w-[70.35rem] bgScreen:font-normal bgScreen:pl-[2rem]",
		contentContainerStyle:
			"min-h-[12rem] border-t border-t-black  px-5 py-5 md:min-h-[6rem] mobileMedium:min-h-[6rem]",
		firstContainerStyle:
			"w-[22rem] mt-3 bg-[#2D2D2D]  text-[#F4F4F4] md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		secondContainerStyleForHeaderAndSpan:
			"w-[23rem] min-h-[4rem] flex items-center justify-between md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		h2Style:
			"font-medium whitespace-nowrap font-poppins text-[1.1rem] text-[#F4F4F4] ml-4 bgScreen:text-[1.5rem]",
		spanStyle:
			"text-[1.7rem]  flex justify-end w-[5rem] mr-8 md:mr-4 text-[#F4F4F4] bgScreen:text-[3rem]",
	},
	{
		title: "Where can I watch?",
		content1:
			"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
		content2:
			"You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go an without an internet connection. Take Netflix with you anywhere.",
		contentStyle1:
			"font-poppins font-medium w-[17.2rem] md:text-[1rem] md:w-[40rem] mobileMedium:w-[21rem] bgScreen:text-[1.3rem] bgScreen:w-[70.35rem] bgScreen:font-normal bgScreen:pl-[2rem]",
		contentStyle2:
			"mt-5 font-poppins font-medium w-[18.4rem] md:text-[1rem] md:w-[41rem] mobileMedium:w-[21rem] bgScreen:pl-[2rem]  bgScreen:text-[1.3rem] bgScreen:w-[70.35rem] ",
		contentContainerStyle:
			"min-h-[27rem] text-[#F4F4F4]  border-t border-t-black px-4 py-5 bg-[#2D2D2D] md:w-[45rem] md:min-h-[10rem] mobileMedium:min-h-[5rem] bgScreen:w-[74.125rem]",
		firstContainerStyle:
			"w-[22rem] mt-3 md:w-[45rem] mobileMedium:w-[23.75rem]  bgScreen:w-[74.125rem]",
		secondContainerStyleForHeaderAndSpan:
			"w-[22rem] bg-[#2D2D2D] min-h-[4rem] flex items-center justify-between md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		h2Style:
			"font-medium font-poppins text-[1.1rem] text-[#F4F4F4] ml-4 bgScreen:text-[1.5rem]",
		spanStyle: "text-[1.4rem] mr-4 text-[#F4F4F4] bgScreen:text-[3rem]",
	},

	{
		title: "How do I cancel?",
		content1:
			"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fee-start or stop your account anytime.",
		contentStyle1:
			"font-poppins font-medium w-[17.2rem] md:text-[1rem] md:w-[40rem] mobileMedium:w-[20.7rem] bgScreen:text-[1.3rem] bgScreen:w-[70.35rem] bgScreen:font-normal",
		contentStyle2: "font-poppins font-medium w-[17.2rem]",
		contentContainerStyle:
			"min-h-[12rem] bg-[#2D2D2D] border-t border-t-black px-4 py-5 md:min-h-[7rem] bgScreen:pl-[2rem]",
		firstContainerStyle:
			"w-[22rem] mt-3 text-[#F4F4F4] md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		secondContainerStyleForHeaderAndSpan:
			"w-[22rem] bg-[#2D2D2D] min-h-[4rem] flex items-center justify-between md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		h2Style:
			"font-medium font-poppins text-[1.1rem] ml-4 bgScreen:text-[1.5rem]",
		spanStyle: "text-[1.4rem] mr-4 bgScreen:text-[3rem]",
	},
	{
		title: "What can I watch on Netflix?",
		content1:
			"	Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
		contentStyle1:
			"font-poppins font-medium w-[17.8rem] md:text-[1rem] md:w-[40rem]  mobileMedium:w-[20.75rem]  bgScreen:text-[1.3rem] bgScreen:w-[70.35rem] bgScreen:font-normal ",
		contentContainerStyle:
			"min-h-[12rem] bg-[#2D2D2D] border-t border-t-black px-4 py-5  md:min-h-[7rem] mobileMedium:min-h-[5rem] bgScreen:pl-[2rem]",
		firstContainerStyle:
			"w-[22rem] mt-3 text-[#F4F4F4] md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem] ",
		secondContainerStyleForHeaderAndSpan:
			"w-[22rem] min-h-[4rem] bg-[#2D2D2D] flex items-center justify-between md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		h2Style:
			"font-medium font-poppins text-[1.1rem] ml-4 bgScreen:text-[1.5rem]",
		spanStyle: "text-[1.4rem] mr-4 bgScreen:text-[3rem]",
	},
	{
		title: "Is Netflix good for kids?",
		content1:
			"	The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
		content2:
			"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
		contentStyle1:
			"font-poppins font-medium w-[17.8rem] text-[#F4F4F4] md:text-[1rem] md:w-[41rem] mobileMedium:w-[21.75rem] bgScreen:text-[1.3rem] bgScreen:w-[70.35rem] bgScreen:font-normal ",
		contentStyle2:
			"font-poppins font-medium w-[17.9rem] mt-4 text-[#F4F4F4] md:text-[1rem] md:w-[41rem] mobileMedium:w-[21.75rem] bgScreen:text-[1.3rem] bgScreen:w-[70.35rem]",
		contentContainerStyle:
			"min-h-[12rem] border-t border-t-black bg-[#2D2D2D]  mobileMedium:w-[23.75rem]  px-4 py-5 md:min-h-[7rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem] bgScreen:min-h-[5.25rem] bgScreen:pl-[2rem]",
		firstContainerStyle:
			"w-[22rem] mt-3 mb-[3rem] md:w-[45rem] md:ml-8 mobileMedium:mr-[2rem]  mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem]",
		secondContainerStyleForHeaderAndSpan:
			"w-[22rem] bg-[#2D2D2D] min-h-[4rem] flex items-center justify-between md:w-[45rem] mobileMedium:w-[23.75rem] bgScreen:w-[74.125rem] ",
		h2Style:
			"font-medium font-poppins text-[1.1rem] text-[#F4F4F4] ml-4 bgScreen:text-[1.5rem]",
		spanStyle:
			"text-[1.7rem]  flex justify-end w-[5rem] mr-4 text-[#F4F4F4] bgScreen:text-[3rem]",
	},
];

export default function AccordionItems() {
	const [isOpen, setIsOpen] = useState(null);
     
	
  
	return (
		<div className="bg-[#000000] overflow-hidden mobileMedium:w-[26.75rem] md:w-[48rem] bgScreen:w-[90rem]">
			{accordions.map((accordion, i) => (
				<Accordion
					accordion={accordion}
					index={i}
					onSetOpen={setIsOpen}
					curOpen={isOpen}
					key={accordion?.title}
				/>
			))}
		</div>
	);
}
