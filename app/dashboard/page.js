"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "@/Components/Sidebar";
import ContactAdmin from "@/Components/ContactAdmin";
import NewsletterAdmin from "@/Components/NewsletterAdmin";
import AdminHeader from "@/Components/AdminHeader";


const AdminDashboard = () => {
    const [view, setView] = useState('contact');
   
    useEffect(() => {
        const select = (selector, all = false) => 
            all ? Array.from(document.querySelectorAll(selector)) : document.querySelector(selector);

        const handleNavToggle = () => {
            const navbar = select("#navbar");
            if (navbar) {
                navbar.classList.toggle("navbar-mobile");
                mobileNavToggleBtn.classList.toggle("bi-list");
                mobileNavToggleBtn.classList.toggle("bi-x");
            }
        };

        const handleScrollActiveLinks = () => {
            const position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                const section = document.querySelector(navbarlink.hash);
                if (section) {
                    navbarlink.classList.toggle('active', position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight));
                }
            });
        };

        const handleDropdownToggle = (e) => {
            if ((select('#navbar')).classList.contains('navbar-mobile')) {
                e.preventDefault();
                (e.target.nextElementSibling).classList.toggle('dropdown-active');
            }
        };

        const handleScrollTo = (el) => {
            const header = select('#header');
            const offset = header.offsetHeight;
            const elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
            });
        };

        const mobileNavToggleBtn = select(".mobile-nav-toggle");
        const navbarlinks = select('#navbar .scrollto', true);
        const dropdowns = select('.navbar .dropdown > a', true);
        const scrollLinks = select('.scrollto', true);
        const selectHeader = select('#header');

        if (mobileNavToggleBtn) {
            mobileNavToggleBtn.addEventListener("click", handleNavToggle);
        }

        if (navbarlinks) {
            window.addEventListener('scroll', handleScrollActiveLinks);
            window.addEventListener('load', handleScrollActiveLinks);
        }

        if (dropdowns) {
            dropdowns.forEach(dropdown => dropdown.addEventListener('click', handleDropdownToggle));
        }

        if (scrollLinks) {
            scrollLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    if ((select('#navbar')).classList.contains('navbar-mobile')) {
                        select('#navbar').classList.remove('navbar-mobile');
                        mobileNavToggleBtn.classList.toggle("bi-list");
                        mobileNavToggleBtn.classList.toggle("bi-x");
                    }
                    if (link.hash) {
                        e.preventDefault();
                        handleScrollTo(link.hash);
                    }
                });
            });
        }

        if (selectHeader) {
            const handleHeaderScrolled = () => {
                selectHeader.classList.toggle('header-scrolled', window.scrollY > 100);
            };

            window.addEventListener('load', headerScrolled);
            window.addEventListener('scroll', headerScrolled);
        }

        return () => {
            if (mobileNavToggleBtn) {
                mobileNavToggleBtn.removeEventListener("click", handleNavToggle);
            }
            if (navbarlinks) {
                window.removeEventListener('scroll', handleScrollActiveLinks);
                window.removeEventListener('load', handleScrollActiveLinks);
            }
            if (dropdowns) {
                dropdowns.forEach(dropdown => dropdown.removeEventListener('click', handleDropdownToggle));
            }
            if (scrollLinks) {
                scrollLinks.forEach(link => {
                    link.removeEventListener('click', handleScrollTo);
                });
            }
            if (selectHeader) {
                window.removeEventListener('load', handleHeaderScrolled);
                window.removeEventListener('scroll', handleHeaderScrolled);
            }
        };
    }, []);

    return (
        <>
           <AdminHeader/>
            <div className="d-flex">
                <Sidebar setView={setView} />
                <div className="p-4 w-100">
                    {view === 'contact' && <ContactAdmin />}
                    {view === 'newsletter' && <NewsletterAdmin />}
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
