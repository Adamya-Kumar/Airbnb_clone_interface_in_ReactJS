import "./Fields.css";
import { IoIosSearch } from "react-icons/io";
function Fields() {
  return (
    <div className="flex shadow-sm shadow-slate-500 mx-36 mt-10 p-1 rounded-full main-font items-center ">
      <div className=" rounded-full hover:bg-slate-100 px-10 mr-3 cursor-pointer">
        <span className="head main-btn ml-7">Where</span>
        <p className="about ml-7">Search destinations</p>
      </div>
      <div className="rounded-full hover:bg-slate-100 px-10 mr-3 cursor-pointer">
        <span className="head main-btn">Check in</span>
        <p className="about">Add dates</p>
      </div>
      <div className="rounded-full hover:bg-slate-100 px-10 mr-3 cursor-pointer">
        <span className="head main-btn">Check out</span>
        <p className="about">Add dates</p>
      </div>
      <div className="rounded-full hover:bg-slate-100 px-10 mr-3 cursor-pointer">
        <span className="head main-btn">Who</span>
        <p className="about">Add guests</p>
      </div>
      <div className="ml-12 flex">
        <input
          type="text"
          placeholder="Enter the place"
          className="main-font "
        />
        <div className="rounded-full border border-red-400 w-10 h-10 flex justify-center bg-[#e41d55f0]   ">
            <button><IoIosSearch size="30" className=""/></button>
        </div>
      </div>
    </div>
  );
}
export default Fields;
