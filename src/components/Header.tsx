import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";
import Link from "react-scroll/modules/components/Link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 500))
    }
  }, []);

  return (
    <header id="navbar">
      <div className="flex items-center justify-between mx-20">
        <div className="w-1/4 flex items-center">
          <p className="bg-gradient-to-br from-pink-600 to-purple-700 w-12 h-12" style={{ borderRadius: "50px 80px 100px 40px/100px 60px 70px 50px" }}></p>
          <p className="font-indie text-zinc-200 -ml-11 mt-2">
            <span className="font-extrabold text-[3.2rem]">T</span>
            <span className="text-[1.7rem] -ml-1">abitha</span>
            <span className="font-extrabold text-[3.2rem] ml-2">L</span>
            <span className="text-[1.7rem]">yn</span>
          </p>
        </div>

        <nav className="w-2/5">
          <ul className="list-none flex items-center gap-14 text-base text-zinc-100 w-full font-bold">
            <li>
              <Link smooth duration={300} offset={-20} className="cursor-pointer" to="home">Home</Link>
            </li>
            <li>
              <Link smooth duration={300} offset={-20} className="cursor-pointer" to="about">About</Link>
            </li>
            <li>
              <Link smooth duration={300} offset={-20} className="cursor-pointer" to="skills">Skills</Link>
            </li>
            <li>
              <Link smooth duration={300} offset={-20} className="cursor-pointer" to="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link smooth duration={300} offset={-20} className="cursor-pointer" to="contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="w-1/5 flex justify-end">
          <button className="py-3 px-7 text-base rounded-full bg-gradient-to-br from-pink-600 to-purple-800 hover:cursor-pointer transition-all hover:shadow-[0px_1px_1px_rgba(219,_39,_119,_1),_0_1px_20px_rgba(219,_39,_119,_1)] text-zinc-200 font-bold [text-shadow:_0_2px_0_rgb(107,_33,_168_/_40%)] hover:scale-105">Download CV</button>
        </div>

        {
          isScrolled ? (
            <div className="fixed w-full flex justify-end p-4 bottom-4 right-0 text-white">
              <Link to="navbar" className="bg-gradient-to-br from-pink-600 to-purple-700 w-12 h-12 cursor-pointer hover:scale-110 transition-all" style={{ borderRadius: "50px 80px 100px 40px/100px 60px 70px 50px" }}>
               <HiArrowUp size={24} className="ml-3 mt-3" />
              </Link>
            </div>
          ) : null
        }
      </div>
    </header>
  );
}
 
export default Header;