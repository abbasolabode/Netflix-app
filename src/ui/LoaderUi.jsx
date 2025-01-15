import { ImSpinner3 } from "react-icons/im";

export default function LoaderUi() {
  return (
		<div className="w-[24.375rem]">
			<div className="w-[24.375rem] text-center mx-auto">
				<span className="w-[1.2rem] text-center mx-auto">
					<ImSpinner3 className="animate-spin w-[1.2rem] mx-auto text-center text-white" />
				</span>
			</div>
		</div>
	);
}

