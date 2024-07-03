"use client"
import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      const handleScroll = () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      };
      document.addEventListener('scroll', handleScroll);
      return () => document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link href="/">
          <div className="logo d-flex align-items-center scrollto me-auto me-lg-0 ms-3">
            <img src="/Logo.png" alt="" />
          </div>
        </Link>
        <nav className="navbar navbar-expand-lg">
          <ul>
            <li><Link className="nav-link link" href="#">Home</Link></li>
            <li><Link className="nav-link link" href="/about">About</Link></li>
            <li><Link className="nav-link link" href="#">Offering</Link></li>
            <li><Link className="nav-link link" href="#">Case Studies</Link></li>
            <li><Link className="nav-link link" href="#">Blog</Link></li>
            <li><Link className="nav-link link" href="#">Careers</Link></li>
            <li><Link className="nav-link link" href="#">Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>
      </div>
    </header>
  );
}
