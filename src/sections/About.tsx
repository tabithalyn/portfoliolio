import profileImg from "../assets/profileImg.png";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center gap-10 my-10 mx-20 text-white">
        <div className="relative">
          <h1 className="py-0 px-7 text-5xl font-bold">About Me</h1>
          <img src={profileImg} alt="" className="absolute bottom-0 right-0 -z-10" />
        </div>
        <div className="flex gap-12">
          <div className="w-1/3 flex justify-end">
            <img src={profileImg} alt="" className="w-2/3" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 text-base font-medium">
              <p>Fusce dapibus ornare felis, nec lobortis libero tincidunt quis. Nulla a enim velit.</p>
              <p>Maecenas eu pulvinar justo. Sed egestas dui nec justo laoreet finibus. Integer dignissim porta sapien quis posuere.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-14 items-center transition-all hover:scale-105"><p className="min-w-[150px] text-sm font-medium">HTML & CSS</p> <hr style={{ width: "100%", height: "7px", border: "none", borderRadius: "8px", backgroundColor: "#DE3163" }} /></div>
              <div className="flex gap-14 items-center transition-all hover:scale-105"><p className="min-w-[150px] text-sm font-medium">JavaScript</p> <hr style={{ width: "100%", height: "7px", border: "none", borderRadius: "8px", backgroundColor: "#d01372" }} /></div>
              <div className="flex gap-14 items-center transition-all hover:scale-105"><p className="min-w-[150px] text-sm font-medium">ReactJS & TypeScript</p> <hr style={{ width: "67%", height: "7px", border: "none", borderRadius: "8px", backgroundColor: "#bc0083" }} /></div>
              <div className="flex gap-14 items-center transition-all hover:scale-105"><p className="min-w-[150px] text-sm font-medium">Node</p> <hr style={{ width: "46%", height: "7px", border: "none", borderRadius: "8px", backgroundColor: "#a20093" }} /></div>
              <div className="flex gap-14 items-center transition-all hover:scale-105"><p className="min-w-[150px] text-sm font-medium">Firebase</p> <hr style={{ width: "40%", height: "7px", border: "none", borderRadius: "8px", backgroundColor: "#7f19a1" }} /></div>
              <div className="flex gap-14 items-center transition-all hover:scale-105"><p className="min-w-[150px] text-sm font-medium">Tailwind & Sass CSS</p> <hr style={{ width: "63%", height: "7px", border: "none", borderRadius: "8px", backgroundColor: "#6a21a6" }} /></div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-around items-center my-10">
          <div className="flex flex-col items-center gap-3 w-1/3">
            <h1 className="text-4xl font-extrabold bg-gradient-to-br from-pink-600 to-purple-700 text-transparent bg-clip-text">10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr style={{ backgroundColor: "white" }} />
          <div className="flex flex-col items-center gap-3 w-1/3 border-x border-x-white">
            <h1 className="text-4xl font-extrabold bg-gradient-to-br from-pink-600 to-purple-700 text-transparent bg-clip-text">50+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr style={{ backgroundColor: "white" }} />
          <div className="flex flex-col items-center gap-3 w-1/3">
            <h1 className="text-4xl font-extrabold bg-gradient-to-br from-pink-600 to-purple-700 text-transparent bg-clip-text">100%</h1>
            <p>READY & WILLING</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default About;