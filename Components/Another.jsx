import Link from "next/link";

export default function Another(){
    return(
        <section id="services" className="services">
        <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>Our Offering</h2>
                <p>Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumenda quas ut ad
                    dolores adipisci aliquam.</p>
            </div>
            <div className="row gy-5">
                <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                    <div className="service-item">
                        <div className="img">
                            <img src="/assets/img/services-1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-activity"></i>
                            </div>
                            <Link href="#"><div  className="stretched-link">
                                <h3>Nesciunt Mete</h3>
                            </div></Link>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus
                                dolores iure perferendis.</p>
                        </div>
                    </div>
                </div>
            
                <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                        <div className="img">
                            <img src="/assets/img/services-2.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-broadcast"></i>
                            </div>
                            <Link href="#"><div  className="stretched-link">
                                <h3>Eosle Commodi</h3>
                            </div></Link>
                            <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque
                                eum hic non ut nesciunt dolorem.</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                    <div className="service-item">
                        <div className="img">
                            <img src="/assets/img/services-3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-easel"></i>
                            </div>
                            <Link href="#"><div  className="stretched-link">
                                <h3>Ledo Markt</h3>
                            </div></Link>
                            <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id
                                voluptas adipisci eos earum corrupti.</p>
                        </div>
                    </div>
                </div>
                

                <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                    <div className="service-item">
                        <div className="img">
                            <img src="/assets/img/services-4.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-bounding-box-circles"></i>
                            </div>
                            <Link href="#"><div className="stretched-link">
                                <h3>Asperiores Commodit</h3>
                            </div></Link>
                            <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea
                                fuga sit provident adipisci neque.</p>
                            <a href="#" className="stretched-link"></a>
                        </div>
                    </div>
                </div>
               

                <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
                    <div className="service-item">
                        <div className="img">
                            <img src="/assets/img/services-5.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-calendar4-week"></i>
                            </div>
                            <Link href="#"><div className="stretched-link">
                                <h3>Velit Doloremque</h3>
                            </div></Link>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut.
                                Sed animi at autem alias eius labore.</p>
                                <Link href="#"><div  className="stretched-link"></div></Link>
                        </div>
                    </div>
                </div>
             

                <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
                    <div className="service-item">
                        <div className="img">
                            <img src="/assets/img/services-6.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-chat-square-text"></i>
                            </div>
                            <Link href="#"><div className="stretched-link">
                                <h3>Dolori Architecto</h3>
                            </div></Link> 
                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure.
                                Corrupti recusandae ducimus enim.</p>
                                <Link href="#"><div className="stretched-link"></div></Link>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
    )
}