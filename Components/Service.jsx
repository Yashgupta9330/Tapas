import Link from 'next/link';

export default function Service() {
    return (
        <section id="featured-services" className="featured-services">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-activity icon"></i></div>
                            <h4>
                                <Link href="#">
                                    <div className="link stretched-link">People-Centric Approach</div>
                                </Link>
                            </h4>
                            <p>Embracing a culture of learning and growth, our team is the heart of Tapas, driving excellence and innovation.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                            <h4>
                                <Link href="#">
                                    <div className="link stretched-link">Customer-Centric Solutions</div>
                                </Link>
                            </h4>
                            <p>Focused on delivering beyond expectations, our commitment to quality ensures timely, satisfactory project deliveries.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                            <h4>
                                <Link href="#">
                                    <div className="link stretched-link">Resilience Amid Challenges</div>
                                </Link>
                            </h4>
                            <p>Navigating through adversities, Tapas thrives on resilience and adaptability, ensuring consistent results even in tough times.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                            <h4>
                                <Link href="#">
                                    <div className="link stretched-link">Continuous Improvement Culture</div>
                                </Link>
                            </h4>
                            <p>With an eye on the future, we prioritize continuous improvement, staying ahead in the SAP ecosystem and setting new benchmarks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
