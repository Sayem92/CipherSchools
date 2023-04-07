import React, { useState } from "react";
import linkedIn from "../../assets/LinkedIn.svg";
import Github from "../../assets/Github.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Website from "../../assets/Website.svg";

const TheWeb = () => {
  const [open, setOpen] = useState(true);
  const [masterObject, setMasterObject] = useState({
    LinkedIn: "",
    Github: "",
    Facebook: "",
    Twitter: "",
    Instagram: "",
    Website: "",
  });

  const handleSubmit = () => {
    setOpen(!open);
    console.log(masterObject);
  };

  return (
    <div className="mx-12 my-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold uppercase">On The Web</h1>
        <p
          onClick={handleSubmit}
          className="py-1 px-6 rounded-md bg-orange-400 text-white cursor-pointer"
        >
          {open ? "Edit" : "Save"}
        </p>
      </div>
      {/* field all  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="font-semibold">LinkedIn</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={linkedIn} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              name=""
              readOnly={open}
              value={masterObject?.LinkedIn}
              onChange={(e)=>setMasterObject({...masterObject, LinkedIn: e.target.value})}
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Github</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Github} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              name=""
              readOnly={open}
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Facebook</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Facebook} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              name=""
              readOnly={open}
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Twitter</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Twitter} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              name=""
              readOnly={open}
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Instagram</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Instagram} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              name=""
              readOnly={open}
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Website</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Website} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              name=""
              readOnly={open}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheWeb;
