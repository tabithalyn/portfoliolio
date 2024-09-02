import parse from "html-react-parser";
import { skills } from "../assets/skills";

type SkillType = {
  name: string;
  description: string;
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
            <div key={id} className="flex flex-wrap items-start justify-center gap-4 p-8 rounded-lg border border-gray-100 bg-gray-50">
              <h2 className="bg-orange-200 text-xl font-semibold">{skill.name}</h2>
              <p className="bg-rose-200">{parse(skill.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Skills;