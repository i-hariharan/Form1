import React from 'react'
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
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center item-center bg-gray-200 w-full rounded-xl text-[#000000] font-bold text-3xl tracking-wide px-2 py-4">
            <h1>Survey</h1>
          </div>
          
          <div className="flex flex-col bg-[#eaf5fe] space-y-3 w-full rounded-xl justify-center item-center ">
            <div className=" flex p-4 justify-center item-center text-[#000000] text-1xl font-bold">
              <span>
                We appreciate your participation in our industry.
                Please take the survey & leave a remark below to 
                help with Future Improvements  
              </span>
            </div>
          </div>

          <div>
            <div>
              <Card className="bg-gray-200">
                <CardHeader>
                  <div className="flex justify-center item-center">
                    <CardTitle>Lets Compelete</CardTitle>
                  </div>
                  <div className="flex justify-center item-center">
                    <CardDescription>
                       Please take the survey and leave a
                       remark below and help us for Future 
                       Improvements  .{" "}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4 font-bold">
                    <div className="flex justify-center item-center">Personal Information</div>
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
                    
                    <br></br>
                    <br></br>

                    <div className="flex justify-center item-center">Questions</div>

                    <div className="text-sm">
                      <label>1. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>2. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>3. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>4. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>5. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>6. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>7. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>8. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>9. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>10. Is the Dashboard is very easy and clear to Access??</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="Ex: Yes/No or Good/NotBad"
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
