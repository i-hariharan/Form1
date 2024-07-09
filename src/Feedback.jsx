import React from "react";
import { MdEmail, MdNavigateNext } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import { Button } from "./components/ui/button";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";



export default function Feedback() { 


  return (
    <div className="flex w-full justify-center items-center">
      <div className=" flex flex-col space-x-6 bg-[#032d60] w-full max-w-5xl p-8 rounded-xl shadow-lg text-[#ffffff]">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-center item-center font-bold text-3xl tracking-wide">
            <h1>Contact Us!</h1>
          </div>
          <div className=" flex justify-center item-center text-[#04491] text-sm">
            <span>
              This page describes about how you can contact us and Interact with
              Us!!!
            </span>
          </div>

          <div className="flex max-md:flex-col w-full space-x-5 justify-center item-center">
            <div className="inline-flex item-center justify-center space-x-2">
              <FaLinkedin />
              <span>Altruisty</span>
            </div>
            
            <div className="inline-flex item-center justify-center space-x-2">
              <MdEmail />
              <span>AltruistyBusiness@gmail.com</span>
            </div>

            <div className="inline-flex item-center justify-center space-x-2">
              <FaMobileScreenButton />
              <span>+91 8667839838</span>
            </div>
          </div>

          <div>
            <div>
              <Card className="bg-[#eaf5fe]">
                <CardHeader>
                  <div className="flex justify-center item-center space-x-2">
                    <RiFeedbackLine />
                    <CardTitle>Feedback</CardTitle>
                  </div>
                  <div className="flex justify-center item-center">
                    <CardDescription>
                      This page is for Users to Wish to Interact with Us By
                      Sharing their Opinions and Thoughts.{" "}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4 font-bold">
                    <div className="text-sm">
                      <label>Name</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="UserName"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Email</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder=" Enter Your Email"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Mobile no</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder=" Enter Your Mobile no"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Suggestion</label>
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Leave Suggestion"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Message</label>
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Description"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex self-end bg-[#044491] w-full text-white font-bold rounded-lg px-6 py-2 uppercase text-sm justify-center item-center">
                    <button>Submit</button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
