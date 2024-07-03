import Image from "next/image";

export default function About(){
    return(
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>About Us</h2>
                    <p>At Tapas Infosystems, we're dedicated to excellence and innovation. Join us on our journey of
                        customer-centric solutions and continuous growth. <a href="/about">Read More...</a> </p>
                </div>

                <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-5">
                        <div className="about-img">
                            <img src="/assets/img/about.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <h3 className="pt-0 pt-lg-5">Unveiling Tapas Infosystems: Your Pathway to IT Excellence</h3>

                       
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab1">
                                <p className="fst-italic">Pioneering Excellence in IT Solutions</p>

                                <div className="d-flex align-items-center mt-4">
                                    <i className="bi bi-check2"></i>
                                    <h4>Commitment to Innovation:</h4>
                                </div>
                                <p>
                                    At Tapas Infosystems, innovation is at the core of everything we do. We are
                                    dedicated to pushing boundaries and exploring new horizons in IT solutions to
                                    deliver transformative results
                                    for our clients.
                                </p>

                                <div className="d-flex align-items-center mt-4">
                                    <i className="bi bi-check2"></i>
                                    <h4>Customer-Centric Approach</h4>
                                </div>
                                <p>
                                    Our focus revolves around our clients needs and aspirations. We prioritize
                                    understanding their unique challenges and requirements to tailor solutions that not
                                    only meet but exceed
                                    their expectations.
                                </p>

                                <div className="d-flex align-items-center mt-4">
                                    <i className="bi bi-check2"></i>
                                    <h4>Culture of Resilience</h4>
                                </div>
                                <p>
                                    Resilience is ingrained in our DNA. We thrive in the face of challenges, leveraging
                                    adversity as an opportunity for growth and innovation. Our ability to adapt and
                                    overcome obstacles
                                    ensures consistent delivery of exceptional outcomes.
                                </p>

                                <div className="d-flex align-items-center mt-4">
                                    <i className="bi bi-check2"></i>
                                    <h4>Continuous Improvement Philosophy</h4>
                                </div>
                                <p>
                                    Constantly evolving and refining our methodologies, we embrace a culture of
                                    continuous improvement. We believe in setting new standards and surpassing
                                    conventional benchmarks to drive
                                    excellence in every aspect of our operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}