"use client"
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
    const [options, setOptions] = useState('All');

    return (
        <section id="portfolio" className="portfolio" data-aos="fade-up">
            <div className="container">
                <div className="section-header">
                    <h2>Case Studies</h2>
                    <p>
                        Non hic nulla eum consequatur maxime ut vero memo vero totam officiis pariatur eos dolorum sed
                        fug dolorem est possimus esse quae repudiandae. Dolorem id enim officiis sunt deserunt esse
                        soluta consequatur quaerat
                    </p>
                </div>
            </div>

            <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
                    data-portfolio-sort="original-order">
                    <ul className="portfolio-flters">
                        <li data-filter="*" className='filter-active' onClick={() => setOptions('All')}>All</li>
                        <li data-filter=".filter-app" className='filter-active' onClick={() => setOptions('App')}>App</li>
                        <li data-filter=".filter-product" className='filter-active' onClick={() => setOptions('Product')}>Product</li>
                        <li data-filter=".filter-branding" className='filter-active' onClick={() => setOptions('Branding')}>Branding</li>
                        <li data-filter=".filter-books" className='filter-active' onClick={() => setOptions('Books')}>Books</li>
                    </ul>

                    <div className="row g-0 portfolio-container">
                        {(options === 'App' || options === 'All') && (
                            <>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <img src="/assets/img/portfolio/app-1.jpg" className="img-fluid" alt="App 1" />
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <Link href="/assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </Link>
                                        <Link href="portfolio-details.html" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <img src="/assets/img/portfolio/app-2.jpg" className="img-fluid" alt="App 2" />
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <Link href="/assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </Link>
                                        <Link href="portfolio-details.html" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}

                        {(options === 'Product' || options === 'All') && (
                            <>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                                    <img src="/assets/img/portfolio/product-1.jpg" className="img-fluid" alt="Product 1" />
                                    <div className="portfolio-info">
                                        <h4>Product 1</h4>
                                        <Link href="/assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </Link>
                                        <Link href="portfolio-details.html" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                                    <img src="/assets/img/portfolio/product-2.jpg" className="img-fluid" alt="Product 2" />
                                    <div className="portfolio-info">
                                        <h4>Product 2</h4>
                                        <Link href="/assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </Link>
                                        <Link href="portfolio-details.html" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}

                        {(options === 'Branding' || options === 'All') && (
                            <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
                                <img src="/assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="Branding 1" />
                                <div className="portfolio-info">
                                    <h4>Branding 1</h4>
                                    <Link href="/assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </Link>
                                    <Link href="portfolio-details.html" title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </Link>
                                </div>
                            </div>
                        )}

                        {(options === 'Books' || options === 'All') && (
                            <div className="col-lg-4 col-md-6 portfolio-item filter-books">
                                <img src="/assets/img/portfolio/books-1.jpg" className="img-fluid" alt="Books 1" />
                                <div className="portfolio-info">
                                    <h4>Books 1</h4>
                                    <Link href="/assets/img/portfolio/books-1.jpg" title="Books 1" data-gallery="portfolio-gallery" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </Link>
                                    <Link href="portfolio-details.html" title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
