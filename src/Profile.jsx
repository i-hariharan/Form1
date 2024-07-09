import React, { useState } from "react";
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

import converttobase64 from "./Convert.js";
import image from "/photos/image.png";

export default function Profile() {
  const [file, setfile] = useState("");

  const onupload = async (e) => {
    const base64 = await converttobase64(e.target.files[0]);
    setfile(base64);
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className=" flex flex-col space-x-6 bg-[#032d60] w-full h-full md:w-80 max-w-5xl p-8 rounded-xl shadow-lg text-[#ffffff]">
        <div className="flex flex-col space-y-2">
          <div>
            <div>
              <Card className="bg-[#ffffff]">
                <CardHeader>
                  <div className="flex justify-center item-center">
                    <CardTitle>Edit Profile</CardTitle>
                  </div>
                  <label>
                    <div className="">
                      <img
                        src={file || image}
                        alt=""
                        className="w-full h-full rounded-full"
                      />

                      <input
                        onChange={onupload}
                        type="file"
                        id="image"
                        name="image"
                        className="invisible"
                      />
                    </div>
                  </label>
                  <div className="flex justify-center item-center">
                    <CardDescription>
                      <span>Let u create you own profile.</span>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4 font-bold">
                    <div className="text-sm">
                      <label>Full Name</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your fullname"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Age</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Ex: 20"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Gender</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="xyz"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Birthday</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="xx-yy-zzzz"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Mobile number</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="abc"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Email</label>
                    </div>
                    <div>
                      <input
                        type="Email"
                        placeholder="xyz"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>

                    <div className="text-sm">
                      <label>Address</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="xyz"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>CollegName</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="abc"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>ProjectName</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="abc"
                        className="ring-1 ring-[#032d60] rounded-xl w-full px-2 py-4 outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="text-sm">
                      <label>Linkedin Id</label>
                    </div>
                    <div>
                      <input
                        type="type"
                        placeholder="abc"
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
