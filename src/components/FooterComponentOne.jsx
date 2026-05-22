/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HoveringContext } from "../context/HoveringContext";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaThreads, FaWhatsapp, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
const FooterComponentOne = () => {
  const [hover, setHover] = useContext(HoveringContext);
  const [setIsVisible] = useState(true);

  // Show button when user scrolls down 20px
  const toggleVisibility = () => {
    if (window.screenY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Main footer container */}
      <div className="bg-thirdSectionBg w-full text-white">
        <div className="flex flex-col gap-8 pt-8 pb-8 px-4 sm:gap-12 sm:pt-12 md:gap-16 md:pt-16">
          {/* Top Row: Logo and Navigation */}
          <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
            {/* Logo and brand section */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4">
              <div className="text-center cursor-pointer transition-opacity duration-300">
                <Link to={"/"}>
                  <img src="/logob.png" className="object-contain w-16 h-16 sm:w-20 sm:h-20" alt="" />
                </Link>
              </div>
              <Link to={"/"}>
                <div className="font-LogoFont text-base sm:text-xl max-w-[140px]">
                  Build Career FOUNDATION
                </div>
              </Link>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col tablet:flex-row font-normal justify-center items-center text-sm sm:text-base gap-3 sm:gap-4">
              <Link to="/WhoWeArePage" onClick={() => { setHover({ ...hover, isWhoWeAre: true }); scrollToTop(); }}>
                <div className={`hover:text-thankYouColor ${hover.isWhoWeAre ? "text-thankYouColor" : ""}`}>Who We Are</div>
              </Link>
              <Link to="/ImpactPage" onClick={() => { setHover({ ...hover, isImpact: true }); scrollToTop(); }}>
                <div className={`hover:text-thankYouColor ${hover.isImpact ? "text-thankYouColor" : ""}`}>Impact</div>
              </Link>
              <Link to="/HowDoesGivingWorkPage" onClick={() => { setHover({ ...hover, isHowDoesWork: true }); scrollToTop(); }}>
                <div className={`hover:text-thankYouColor ${hover.isHowDoesWork ? "text-thankYouColor" : ""}`}>How Does BCF works</div>
              </Link>
              <Link to="/FrequentAskedQuestions" onClick={() => { setHover({ ...hover, isFaq: true }); scrollToTop(); }}>
                <div className={`hover:text-thankYouColor ${hover.isFaq ? "text-thankYouColor" : ""}`}>FAQ</div>
              </Link>
              <Link to="/ContactPage" onClick={() => { setHover({ ...hover, isContact: true }); scrollToTop(); }}>
                <div className={`hover:text-thankYouColor ${hover.isContact ? "text-thankYouColor" : ""}`}>Contact Us</div>
              </Link>
              <Link to="/LoginIn" onClick={scrollToTop}>
                <div className="hover:text-thankYouColor">Login as Admin</div>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/20"></div>

          {/* Social Media Links Section */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { id: 'facebook', icon: <FaFacebookF size={18} />, url: 'https://www.facebook.com/profile.php?id=61589024410391' },
              { id: 'instagram', icon: <FaInstagram size={18} />, url: 'https://www.instagram.com/buildcareer_foundation?igsh=MWt3NXJsa3ZzbW90Yg==' },
              { id: 'tiktok', icon: <FaTiktok size={18} />, url: 'https://www.tiktok.com/@build_career_foundation?_r=1&_t=ZS-966zTxZzaab' },
              { id: 'twitter', icon: <FaXTwitter size={18} />, url: 'https://x.com/___BCF' },
              { id: 'threads', icon: <FaThreads size={18} />, url: 'https://www.threads.com/@buildcareer_foundation' },
              { id: 'whatsapp', icon: <FaWhatsapp size={18} />, url: 'https://whatsapp.com/channel/0029Vb7R2VL7T8befUL88e0t' },
              { id: 'linkedin', icon: <FaLinkedinIn size={18} />, url: 'https://www.linkedin.com/company/build-career-foundation/' },
              { id: 'youtube', icon: <FaYoutube size={18} />, url: 'https://youtube.com/@buildcareerfoundation?si=CilEpK2_rmweWp7_' },
            ].map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:-translate-y-2 hover:bg-thankYouColor hover:shadow-lg transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-thirdSectionBg flex justify-center h-14 sm:h-16">
        <div className="flex items-center justify-center text-white text-xs sm:text-sm">
          <span>&copy; &nbsp;</span> {currentYear} Build Career Foundation
        </div>
      </div>
    </div>
  );
};

export default FooterComponentOne;
