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
import { MdMiscellaneousServices } from "react-icons/md";


export default function Customersupport() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className=" flex flex-col space-x-6 bg-[#032d60] w-full max-w-5xl p-8 rounded-xl shadow-lg text-[#ffffff]">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-center item-center font-bold text-3xl tracking-wide">
            <h1>Customer service </h1>
          </div>
          
          <div className="flex flex-col bg-[#eaf5fe] space-y-3 w-full rounded-xl justify-center item-center px-2 py-10">
            <div className=" flex p-4 justify-center item-center  text-[#000000] text-1xl">
              <span>
                We are here to provide you a top-notch customer support and
                personalized solutions.Our team is Dedicated to ensure your
                satisfaction with timely responses and comprehensive assistance.
                Discover our range of services designed to meet your needs.
              </span>
            </div>
          </div>

          <div>
            <div>
              <Card className="bg-gray-200">
                <CardHeader>
                  <div className="flex justify-center item-center">
                    <CardTitle>Service Application</CardTitle>
                  </div>
                  <div className="flex justify-center item-center">
                    <CardDescription>
                      By Completing the Below Application you can contact and
                      Interact with us and access the services you prefer.{" "}
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
                      <label>Location</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder=" Enter Your Location"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Service Required</label>
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Comment the service you want"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Service Type</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder=" Type of service"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Service Description</label>
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Description of service"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
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
