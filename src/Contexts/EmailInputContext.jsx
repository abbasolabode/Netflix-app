import { createContext, useContext, useState } from "react";

//Create the email state
const EmailContext = createContext();

export default function EmailInputProvider({ children }) {
	const [email, setEmail] = useState("");//A local state that holds value of an input field i.e an email

	//This function receives value of an input field in the parameter
	function handleEmail(receivedEmail) {
		setEmail(receivedEmail);//update the email state
	}

	return (
		//Providing value for the children
		<EmailContext.Provider value={{ email, handleEmail }}>
			{children} 
		</EmailContext.Provider>
	);
}

//custom hook
function useEmailContext() {
	const context = useContext(EmailContext);
	if (context === undefined)
		throw new Error("EmailContext was used outside of the email provider");
	return context;
}

//Exporting the EmailInputProvider and useEmailContext
export { EmailInputProvider, useEmailContext };
