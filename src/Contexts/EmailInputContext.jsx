import { createContext, useContext, useState } from "react";

const EmailContext = createContext();

export default function EmailInputProvider({ children }) {
	const [email, setEmail] = useState("");

	function handleEmail(receivedEmail) {
		setEmail(receivedEmail);
	}

	return (
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

export { EmailInputProvider, useEmailContext };
