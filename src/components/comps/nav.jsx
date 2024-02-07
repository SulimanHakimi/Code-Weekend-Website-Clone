import { FaFacebookF } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Nav() {
  return (
    <div>
      <div className="h-[72px] bg-[#263c53] flex justify-end px-24">
        <ul className="flex w-28 justify-between text-[15px] text-[#a7b0bd] items-center">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
      <div className="h-[120px] bg-slate-50 px-24 flex justify-between items-center ">
        <h1 className="text-3xl font-bold text-[#263c53]">CodeWeekend</h1>
        <ul className="flex gap-7 text-[#a7b0bd] font-[500] items-center text-md">
          <li className="cursor-pointer text-[#0693e3]">Home</li>
          <li className="cursor-pointer hover:text-[#0693e3]">About</li>
          <li className="cursor-pointer hover:text-[#0693e3]">Courses</li>
          <li className="cursor-pointer hover:text-[#0693e3]">Our Graduates</li>
          <li className="cursor-pointer hover:text-[#0693e3]">Case Studies</li>
          <li className="cursor-pointer hover:text-[#0693e3]">News</li>
          <li className="cursor-pointer hover:text-[#0693e3]">Contact</li>
          <li className="text-2xl ml-3 cursor-pointer hover:text-[#0693e3]">
            <IoSearchSharp />
          </li>
        </ul>
      </div>
    </div>
  );
}
