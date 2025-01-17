import {useRouteError } from "react-router-dom";


export default function ErrorMessage() {
	//The useRouteError is used to get any error from fetching data and also to display the error
	const error = useRouteError();
	return (
		<div className="w-[24.375rem]">
			<div className="w-full">
				<p className="text-[1.3rem] min-h-[40rem] font-semibold font-poppins text-center  flex justify-center items-center text-red-500">
					{error.data || error.message}
				</p>
			</div>
		</div>
	);
}
