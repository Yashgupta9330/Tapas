"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/app/Firebase";

const AdminHeader = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const handleLogout = () => {
      signOut(auth);
      sessionStorage.removeItem("user");
      router.push("/signin");
    };

    const select = (selector, all = false) =>
      all
        ? Array.from(document.querySelectorAll(selector))
        : document.querySelector(selector);

    const mobileNavToggleBtn = select(".mobile-nav-toggle");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", () => {
        const body = select("body");
        body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      });
    }

    const navmenuLinks = select("#navmenu a", true);
    navmenuLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        const body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          mobileNavToggleBtn.classList.add("bi-list");
          mobileNavToggleBtn.classList.remove("bi-x");
        }
      });
    });

    const toggleDropdowns = select(".navmenu .toggle-dropdown", true);
    toggleDropdowns.forEach((toggleDropdown) => {
      toggleDropdown.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = this.parentNode;
        const nextSibling = parent.nextElementSibling;

        parent.classList.toggle("active");
        if (nextSibling) {
          nextSibling.classList.toggle("dropdown-active");
        }

        e.stopImmediatePropagation();
      });
    });

    return () => {
      // Clean up event listeners if needed
    };
  }, [router]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Tapas</h1>
        </div>
        <i className="mobile-nav-toggle cursor-pointer md:hidden text-2xl bi bi-list"></i>
        {user ? (
          <button
            onClick={() => signOut(auth).then(() => router.push("/signin"))}
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Logout
          </button>
        ) : (
          <Link href="/adminlogin">
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
