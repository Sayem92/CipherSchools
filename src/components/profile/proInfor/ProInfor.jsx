import React, { useState } from "react";
import "./ProInfor.css";

const ProInfor = () => {
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const handleSubmit = () => {
    setOpen(!open);
    if (!open) {
      // set the value to data base
      console.log(selectedValue);
      console.log(selectedValue2);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  return (
    <div className="mx-12 my-12">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold uppercase">
          Professional Information
        </h1>
        <p
          onClick={handleSubmit}
          className="py-1 px-6 rounded-md bg-orange-400 text-white cursor-pointer"
        >
          {open ? "Edit" : "Save"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="font-semibold">Highest education</p>
          <select
            disabled={open}
            value={selectedValue}
            onChange={handleSelectChange}
            className="w-full outline-none rounded  py-2 px-4"
          >
            <option value="Primary" className="text-lg ">
              Primary
            </option>
            <option value="Secondary" className="text-lg ">
              Secondary
            </option>
            <option value="Higher Secondary" className="text-lg ">
              Higher Secondary
            </option>
            <option value="Graduation" className="text-lg ">
              Graduation
            </option>
            <option value="Post Graduation" className="text-lg ">
              Post Graduation
            </option>
          </select>
        </div>

        <div>
          <p className="font-semibold">What do you do currently?</p>
          <select
            disabled={open}
            value={selectedValue2}
            onChange={handleSelectChange2}
            className="w-full outline-none rounded py-2 px-4"
          >
            <option value="Schooling" className="text-lg ">
              Schooling
            </option>
            <option value="College Student" className="text-lg ">
              College Student
            </option>
            <option value="Teaching" className="text-lg ">
              Teaching
            </option>
            <option value="Job" className="text-lg ">
              Job
            </option>
            <option value="Freelancing" className="text-lg ">
              Freelancing
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProInfor;
