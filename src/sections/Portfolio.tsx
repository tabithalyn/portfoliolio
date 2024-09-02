import { FiArrowRight } from "react-icons/fi";
import { workData } from "../assets/work";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="flex flex-col items-center justify-center gap-10 my-10 mx-20">
        <div className="relative">
          <h1 className="py-0 px-5 text-5xl font-bold text-gray-100">My Latest Work</h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {workData.map((work, id) => (
            <img src={work.w_img} key={id} className="box-border w-[419px] h-[280px] transition-all cursor-pointer hover:scale-105 rounded-xl border-0 hover:border-2 hover:border-pink-700" />
          ))}
        </div>
        <div className="flex gap-3 rounded-full border-2 border-white py-6 px-9 text-2xl font-bold mb-10 transition-all cursor-pointer bg-gray-100 hover:scale-105">
          <p>Show More</p>
          <FiArrowRight size={30} className="mt-0.5" />
        </div>
      </div>
    </section>
  );
}
 
export default Portfolio;