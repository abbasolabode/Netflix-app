import Button from "../button/Button";
import SearchQuery from "../inputField/SearchQuery";
import FooterLinks from "./FooterLinks";

export default function FooterGetStarted() {
	return (
		<div className="w-[24.375rem]  h-auto pt-0 mt-0 bg-black overflow-hidden mobileMedium:w-[26.75rem] md:w-[48rem] bgScreen:w-[90rem]">
			<div className="w-[24.375rem] mb-[0.8rem] pt-0 mt-0 md:w-[48rem] bgScreen:w-[90rem]">
				<p className="font-poppins font-medium text-white text-sm pt-0 mt-0 w-[21rem] ml-7 p-0  mobileMedium:ml-6 md:w-[44rem] md:text-center mobileMedium:w-[24rem] bgScreen:w-full bgScreen:whitespace-nowrap bgScreen:min-h-[1.5rem] bgScreen:text-base bgScreen:text-center bgScreen:pt-8">
					Ready to watch? Enter your email to create or restart your membership.
				</p>
			</div>

			<div className="w-[24.375rem] mobileMedium:w-[26.75rem] md:w-[48rem] md:flex md:justify-center p-0 m-0 md:gap-3 md:items-center md:mb-0  md:ml-4 bgScreen:w-[50rem] bgScreen:flex bgScreen:justify-center bgScreen:mx-auto bgScreen:gap-6">
				<div className="ml-5 mobileMedium:ml-6 md:w-2/3 bgScreen:min-h-[1.8rem]">
					<SearchQuery
						mdTablet="md:w-[34rem] md:rounded bg-zinc-900 border-1 border-stone-600 bg-zinc-900 mobileMedium:w-[23.5rem] md:min-h-[3.5rem] bgScreen:w-[35.736rem] bgScreen:min-h-[3.5rem] bgScreen:py-[1.2rem]"
						className
					/>
				</div>

				<div className="flex ml-5 mobileMedium:ml-7 md:w-1/3 md:mt-[-1rem] bgScreen:w-[12.7rem]">
					<Button md="md:mr-[3rem] md:rounded mobileMedium:w-[10.58rem] md:min-h-[3.5rem] bgScreen:w-[12.7rem]" />
				</div>
			</div>

			<FooterLinks />
		</div>
	);
}
