import { NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { sendVerificationEmail } from "@/lib/SendMail";
import { db } from "@/app/Firebase";


export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const docRef = await addDoc(collection(db, 'contacts'), {
            name,
            email,
            subject,
            message,
            timestamp: new Date(),
        });

        await sendVerificationEmail(
            email,
            "Thank you for contacting us",
            { name, subject, message }
        );

        return NextResponse.json({
            id: docRef.id,
            message: "Message sent successfully!",
        });
    } catch (error) {
        console.error("Error processing request: ", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
