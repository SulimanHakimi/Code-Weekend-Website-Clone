import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="h-[490px] bg-footerImg flex justify-center items-center bg-center bg-cover">
      <div className="bg-opacity-40 w-full h-full  flex flex-col justify-around items-center  bg-slate-700 px-24 text-white">
        <div className="flex w-[100%] justify-center items-center gap-8 h-[80%] py-6">
          <div className="w-[23%] flex flex-col gap-2 h-[80%]">
            <h1 className="text-4xl font-bold mb-3">CodeWeekend</h1>
            <p className="text-sm text-[#b5bdc3] mb-3">
              CodeWeekend has emerged and evolved to be a web developer
              accelerator program that delivers training and mentoring program
              to help committed individuals learn how to code and find new or
              better jobs in the market.
            </p>
            <ul className="flex gap-2 text-[#b5bdc3]">
              <li className="bg-sky-600 rounded-full p-3 hover:bg-[#36afe8]">
                <FaFacebookF />
              </li>
              <li className="bg-sky-600 rounded-full p-3 hover:bg-[#36afe8]">
                <FaTwitter />
              </li>
              <li className="bg-sky-600 rounded-full p-3 hover:bg-[#36afe8]">
                <FaLinkedinIn />
              </li>
              <li className="bg-sky-600 rounded-full p-3 hover:bg-[#36afe8]">
                <FaInstagram />
              </li>
            </ul>
          </div>

          <div className="w-[27%] flex flex-col h-[80%]">
            <h1 className="text-3xl font-bold mb-3">Recent News</h1>
            <ul>
              <li className="flex flex-col gap-1 my-2 hover:text-[#36afe8]">
                CodeWeekend Updates – 2022 <br />
                <span className="text-[12px] text-[#b5bdc3]">
                  January 4, 2023
                </span>
              </li>
              <li className="flex flex-col gap-1 my-2 hover:text-[#36afe8]">
                CodeWeekend Bootcamp – 2021 <br />
                <span className="text-[12px] text-[#b5bdc3]">
                  November 11, 2021
                </span>
              </li>
              <li className="flex flex-col gap-1 my-2">
                What is Software Development? <br />
                <span className="text-[12px] text-[#b5bdc3]">
                  January 21, 2020
                </span>
              </li>
            </ul>
          </div>
          <div className="w-[27%] flex flex-col h-[80%] gap-1">
            <strong className="font-bold text-3xl mb-4">Quick Links</strong>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="hover:text-[#36afe8]">Home</li>
              <li className="hover:text-[#36afe8]">About</li>
              <li className="hover:text-[#36afe8]">Courses</li>
              <li className="hover:text-[#36afe8]">Case Studies</li>
              <li className="hover:text-[#36afe8]">Contact</li>
            </ul>
          </div>
          <div className="w-[27%] flex flex-col h-[80%] gap-4 ">
            <h1 className="text-3xl font-bold mb-4">Newsletter</h1>
            <div className=" w-full t-0 relative">
              <input
                className="px-5 text-black text-lg w-full py-3 rounded-3xl overflow-hidden outline-none border-none"
                type="text"
                placeholder="Enter Your Email"
                name=""
                id=""
              />
              <button className="bg-[#36b0e8] px-4 h-full text-sm text-[#e2e6e9] hover:bg-[#56c4f7] rounded-e-3xl py-3 right-0 absolute">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="flex border-t-[1px] border-y-gray-600 w-[100%] items-center justify-between h-[15%]">
          <p className="text-[#b5bdc3] text-sm">
            Copyright 2023, CodeWeekend. All rights reserved!
          </p>
          <p className="text-[#b5bdc3] text-sm">
            A product of <span className="text-white">RapidIteration</span>
          </p>
        </div>
      </div>
    </div>
  );
}
