import { SlArrowDown } from "react-icons/sl";
import profileImg from "../assets/profileImg.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex items-center flex-col gap-8 mt-14">
        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-pink-700 p-2">
          <img src={profileImg} alt="profile image" className="rounded-full w-32 h-32" />
        </div>
        <h1 className="w-full text-center font-semibold text-4xl text-zinc-200">I'm
          <span className="bg-gradient-to-r from-pink-600 to-purple-700 inline-block text-transparent bg-clip-text ml-2">Tabitha Lyn</span>
        , web developer based in Canada.</h1>
        <p className="text-zinc-200">I work with frontend and backend tech, with over 10 years of experience.</p>
        <div className="flex flex-wrap justify-center items-center mb-12">
          <button className="py-3 px-7 text-base rounded-full bg-gradient-to-br from-pink-600 to-purple-800 hover:cursor-pointer transition-all hover:shadow-[0px_0_1px_rgba(219,_39,_119,_1),_0_0_20px_rgba(219,_39,_119,_1)] text-zinc-200 font-bold [text-shadow:_0_2px_0_rgb(107,_33,_168_/_40%)] hover:scale-105">Connect With Me</button>
          <Link to="about" className="w-[97%]">
            <SlArrowDown color="white" className="text-5xl w-full mt-16 hover:animate-bounce hover:cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;