import Link from "next/link";

export default function Team(){
return(
<section id="team" className="team">
<div className="container" data-aos="fade-up">
    <div className="section-header">
        <h2>Our Team</h2>
        <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam
            voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
    </div>

    <div className="row gy-5">
        <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
            <div className="team-member">
                <div className="member-img">
                    <img src="/assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                    <div className="social">
                        <Link href=""><i className="bi bi-twitter"></i></Link>
                        <Link href=""><i className="bi bi-facebook"></i></Link>
                        <Link href=""><i className="bi bi-instagram"></i></Link>
                        <Link href=""><i className="bi bi-linkedin"></i></Link>
                    </div>
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                </div>
            </div>
        </div>
    

        <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="400">
            <div className="team-member">
                <div className="member-img">
                    <img src="/assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                    <div className="social">
                        <Link href=""><i className="bi bi-twitter"></i></Link>
                        <Link href=""><i className="bi bi-facebook"></i></Link>
                        <Link href=""><i className="bi bi-instagram"></i></Link>
                        <Link href=""><i className="bi bi-linkedin"></i></Link>
                    </div>
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="600">
            <div className="team-member">
                <div className="member-img">
                    <img src="/assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                    <div className="social">
                        <Link href=""><i className="bi bi-twitter"></i></Link>
                        <Link href=""><i className="bi bi-facebook"></i></Link>
                        <Link href=""><i className="bi bi-instagram"></i></Link>
                        <Link href=""><i className="bi bi-linkedin"></i></Link>
                    </div>
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
)
}