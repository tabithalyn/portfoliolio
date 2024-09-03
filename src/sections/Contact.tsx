import { HiLocationMarker } from "react-icons/hi";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center gap-10 my-10 mx-20">
        <div className="relative">
          <h1 className="py-0 px-5 text-5xl font-bold text-gray-100">Get In Touch</h1>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col gap-8 w-1/2">
            <p className="text-gray-100 max-w-[550px] text-lg">I'm currently available to take on new projects.</p>
            <div className="flex flex-col gap-3 text-gray-100 text-xl">
              <div className="flex items-center gap-2 text-base">
                <HiEnvelope color="white" size={20} /> tabithalyn6@gmail.com
              </div>
              <div className="flex items-center gap-2 text-base">
                <HiPhone color="white" size={20} /> 000-000-0000
              </div>
              <div className="flex items-center gap-2 text-base">
                <HiLocationMarker color="white" size={20} /> Canada
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-1/2">
            <input type="text" name="name" id="name" placeholder="Name..." autoComplete="false" className="border-0 w-full h-7 pl-5 rounded-xl bg-gray-700 text-lg text-gray-200" />
            <input type="text" name="email" id="email" placeholder="Email..." autoComplete="false" className="border-0 w-full h-7 pl-5 rounded-xl bg-gray-700 text-lg text-gray-200" />
            <input type="text" name="message" id="message" placeholder="Message..." className="border-0 w-full pb-32 pt-4 pl-5 rounded-xl bg-gray-700 text-lg text-gray-200 flex items-start" />
            <p className="w-full flex justify-center">
              <button type="submit" className="border-0 text-gray-100 rounded-full text-xl py-5 px-10 cursor-pointer transition-all hover:scale-105 bg-gradient-to-br from-pink-600 to-purple-700">Submit</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;