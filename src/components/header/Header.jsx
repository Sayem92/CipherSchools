import React from "react";
import bg from "../../assets/headerbg.jpg";
// import edit from "../../assets/pen-edit.svg";
// import edit from "../../assets/pen-svgrepo-com.svg";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center px-7"
      style={{ backgroundImage: `url(${bg})`, height: "130px" }}
    >
      <div className="flex items-center gap-5">
        <div>
          <img
            className="rounded-full"
            src="https://lh3.googleusercontent.com/a/AGNmyxZyymN0L8UiTBNn3PPLDMKktDDem3EKKS2CNYNH3w=s96-c"
            alt=""
          />
          {/* <img src={edit} alt="" /> */}
        </div>
        <div className="text-white">
          <h1 className="text-xl">Hello,</h1>
          <h1 className="text-2xl font-bold">Md. Sayem Miah</h1>
          <h1>sayemmiha123@gmail.com</h1>
        </div>
      </div>
      <div className="text-white font-bold">0 Followers</div>
    </div>
  );
};

export default Header;
