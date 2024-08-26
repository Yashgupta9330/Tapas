import { mailSender } from "./mailsender";


export async function sendVerificationEmail(email , head , data) {
    console.log("send",data);
    const {name,subject,message}=data;
	try {
		const mailResponse = await mailSender(
			email,
			head,
           `NAME=${name} EMAIL=${email}  SUBJECT=${subject} MESSAGE=${message}`	
		);
		console.log("Email sent successfully: ", mailResponse?.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}