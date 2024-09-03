import parse from "html-react-parser";
import { skills } from "../assets/skills";
import { SiExpress, SiNextdotjs } from "react-icons/si";

type SkillType = {
  name: string;
  description: string;
  iClass: string;
}

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col items-center justify-center gap-10 my-40 mx-20">
        <div className="relative">
          <h1 className="px-5 mb-10 text-5xl font-bold text-gray-100">Skills & Services</h1>
        </div>
        <div className="grid grid-cols-4 gap-9 mb-10">
          {skills.map((skill:SkillType, id:number) => (
            <div key={id} className="flex flex-wrap items-start justify-center gap-1 p-4 rounded-lg border border-gray-100 bg-gray-50">
              <h2 className="text-xl font-semibold w-full text-center flex justify-between border-b border-b-gray-200 pb-2">
                {skill.name}
                {
                  skill.name === "NextJS" ?
                  <SiNextdotjs /> : skill.name === "ExpressJS" ? <SiExpress /> : <i className={skill.iClass} />
                }
              </h2>
              <p className="h-[80%] w-full p-1">{parse(skill.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Skills;