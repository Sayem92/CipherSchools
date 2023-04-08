import React from "react";
import bg from "../../assets/headerbg.jpg";
import edit from "../../assets/pen-edit.svg";
import ProfileEditModal from "./ProfileEditModal";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (firstName === "" || lastName === "" || email === "" || image === "") {
      const value = JSON.parse(localStorage.getItem("user"));
      // // setAbout(value);
      // console.log(value);
      setFirstName(value?.firstName);
      setLastName(value?.lastName);
      setEmail(value?.email);
      setImage(value?.image);
    }
  }, [firstName, lastName, email, image]);

  return (
    <div
      className="flex justify-between items-center px-7"
      style={{ backgroundImage: `url(${bg})`, height: "130px" }}
    >
      <div className="flex items-center gap-5">
        <div>
          <img
            className="rounded-full w-20 h-20"
            src={
              image
                ? image
                : "https://lh3.googleusercontent.com/a/AGNmyxZyymN0L8UiTBNn3PPLDMKktDDem3EKKS2CNYNH3w=s96-c"
            }
            alt=""
          />
          <label htmlFor="profile-Edit-Modal">
            <img className="-mt-4 ml-10 cursor-pointer" src={edit} alt="" />
          </label>
          <ProfileEditModal></ProfileEditModal>
        </div>
        <div className="text-white">
          <h1 className="text-xl">Hello,</h1>
          <h1 className="text-2xl font-bold">
            {firstName ? firstName : "Md. Sayem"} {lastName ? lastName : "Miah"}
          </h1>
          <h1>{email ? email : "sayemmiha123@gmail.com"}</h1>
        </div>
      </div>
      <Link to="/followers">
        <div className="text-white font-bold cursor-pointer">0 Followers</div>
      </Link>
    </div>
  );
};

export default Header;
