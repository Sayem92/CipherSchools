import React, { useState } from "react";

const AboutMe = () => {
  const [open, setOpen] = useState(true);
  const [about, setAbout] = useState("");

  const handleSubmit = () => {
    setOpen(!open);
    console.log(about);
  };
  return (
    <div className="mx-12 my-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold uppercase">About Me</h1>
        <p
          onClick={handleSubmit}
          className="py-1 px-6 rounded-md bg-orange-400 text-white cursor-pointer"
        >
          {open ? "Edit" : "Save"}
        </p>
      </div>
      <textarea
        readOnly={open}
        className="w-full resize-none h-32 p-2 outline-none rounded-md"
        type="text"
        value={about}
        placeholder="Add something about you."
        onChange={(e) => setAbout(e.target.value)}
      />
    </div>
  );
};

export default AboutMe;
