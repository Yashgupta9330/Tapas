import { NextResponse } from "next/server";
import { db } from "@/app/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { mailSender } from "@/lib/mailsender";

export async function POST(req) {
    const { email } = await req.json();

    try {
        const docRef = await addDoc(collection(db, 'newsletters'), {
            email,
            timestamp: new Date()
        });

        await mailSender(
            email,
            "Thank you for subscribing to our newsletter @Tapas",
            `Hey there,<br><br>
            Thank you so much for getting in touch! We want to confirm that we enabled your subscription for news and information regarding our services.<br>
            We will keep you updated.<br><br>
            Sincerely,<br>
            The Tapas team`
        );

        return NextResponse.json({
            id: docRef.id,
            message: "Subscription successful! Confirmation email sent."
        });
    } catch (error) {
        console.error("Error processing subscription: ", error);
        return NextResponse.json({
            error: "Failed to process subscription. Please try again later."
        }, { status: 500 });
    }
}
