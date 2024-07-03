import Link from "next/link";

const Navbar = () => {
  return (
    <section id="hero-fullscreen" className="hero-fullscreen d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center position-relative" data-aos="zoom-out">
        <h2>Welcome to <span>Tapas Infosolutions</span></h2>
        <p>Nurturing Excellence, Focus on People.</p>
        <div className="d-flex">
          <Link href="/about">
            <div className="link btn-get-started scrollto">Get Started</div>
          </Link>
          <Link href="https://www.youtube.com/watch?v=LXb3EKWsInQ">
            <div className="link glightbox btn-watch-video d-flex align-items-center">
              <i className="bi bi-play-circle"></i><span>Watch Video</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
