import img from "../assets/profileImg.png";

const Footer = () => {
  return (
    <footer>
      <div className="mb-5 mt-36 mx-16 flex flex-col gap-4">
        <div className="flex justify-between mb-2">
          <div className="text-gray-100 w-1/2 flex flex-wrap">
            <img src={img} alt="" className="w-[10%] rounded-full" />
            <p className="text-base w-[87%] p-3">
              I am a web developer from Canada will 10+ years experience.
            </p>
          </div>
          <div className="flex items-center w-1/2">
            <div className="flex gap-3 rounded-3xl text-gray-200 w-full">
              <input type="email" name="sub-email" id="sub-email" autoComplete="false" placeholder="Enter your email..." className="outline-none border-none bg-transparent text-sm px-6 rounded-full bg-gray-300 text-gray-800 w-full" />
              <div className="rounded-full py-3 px-5 cursor-pointer hover:scale-105 transition-all bg-gray-700">Subscribe</div>
            </div>
          </div>
        </div>
        <hr color="white" className="opacity-60" />
        <div className="flex flex-col text-sm text-gray-100 w-full mt-3">
          <p className="flex justify-center w-full">© 2024 Tabitha Lyn. All rights reserved.</p>
          <div className="flex gap-8 mt-5 mb-14 w-full justify-center">
            <p>Terms of Service</p>
            <p className="mx-5">Privacy Policy</p>
            <p>Connect With Me</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;