"use client";

import { useState } from 'react';
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [formStatus, setFormStatus] = useState({
        loading: false,
        error: "",
        success: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, error: "", success: "" });
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
        
            if (response.ok) {
                setEmail("");
                console.log({ email: email });
                setFormStatus({ loading: false, error: "", success: "Subscribed successfully!" });
                alert("Subscribed successfully!");
            } else {
                setFormStatus({ loading: false, error: "Error subscribing. Please try again.", success: "" });
                alert("Error subscribing. Please try again.");
            }
        } catch (error) {
            console.log(error);
            setFormStatus({ loading: false, error: "An error occurred. Please try again.", success: "" });
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h4>Tapas Infosolutions LLP</h4>
                                <p>
                                    11/C/512, Swapnapurti CHS, <br /> Behind Pop-Tates, Kailash Complex Road, <br /> Vikhroli W, Mumbai
                                    400079.
                                </p>
                                <p>
                                    <strong>Phone:</strong> +91 98709 89154<br />
                                    <strong>Email:</strong> info@tapainfo.com<br />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Home</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>About us</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Careers</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Blog</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Contact</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Terms of service</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Privacy policy</div></Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Offering</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Capabilities - SAP</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Verticles Served</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Projects Delivered</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Project Synopsis</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Portfolio</div></Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link href="#"><div>Case Studies</div></Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Stay updated with the latest news and insights by subscribing to our newsletter today!
                                Unlock exclusive content and receive regular updates by subscribing to our newsletter now!</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                                <input
                                    type="submit"
                                    value={formStatus.loading ? "Loading..." : "Subscribe"}
                                    className="btn btn-primary"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Tapas Infosolutions</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <Link href="https://ideationpeople.com/">Ideation People</Link>
                        </div>
                    </div>

                    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                        <Link href="#"><div className="twitter"><i className="bi bi-twitter"></i></div></Link>
                        <Link href="#"><div className="facebook"><i className="bi bi-facebook"></i></div></Link>
                        <Link href="#"><div className="instagram"><i className="bi bi-instagram"></i></div></Link>
                        <Link href="#"><div className="google-plus"><i className="bi bi-skype"></i></div></Link>
                        <Link href="#"><div className="linkedin"><i className="bi bi-linkedin"></i></div></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
