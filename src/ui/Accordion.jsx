

export default function Accordion({ accordion, index, onSetOpen, curOpen}) {
	const isOpen = curOpen === index;

	if (!accordion) return null;
	const {
		firstContainerStyle = "",
		secondContainerStyleForHeaderAndSpan = "",
		h2Style = "",
		title = "",
		spanStyle = "",
		contentContainerStyle = "",
		contentStyle1 = "",
		contentStyle2 = "",
		content1 = "",
		content2 = "",
	
	} = accordion || {};
    
	function handleToggle(){
       onSetOpen(isOpen ? null : index);
	}
	

	return (
		<div className="w-[24.375rem] overflow-hidden bg-[#000000] mt-[-0.3rem] mobileMedium:w-[26.75rem] md:w-[48rem] bgScreen:w-[90rem] mobileMedium:mr-[2rem]">
			<div className>
				<div
					className="w-[24.375rem] flex flex-col items-center transition-transform duration-1000 transform mobileMedium:w-[26.75rem] md:w-[48rem] bgScreen:w-[90rem]"
					onClick={handleToggle}
				>
					<div className={firstContainerStyle}>
						<div className={secondContainerStyleForHeaderAndSpan}>
							<h2 className={h2Style}>{title}</h2>
							<span className={spanStyle}>{isOpen ? "x" : "+"}</span>
						</div>

						{isOpen && (
							<div className={contentContainerStyle}>
								<p className={contentStyle1}>{content1}</p>

								{content2 && <p className={contentStyle2}>{content2}</p>}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
