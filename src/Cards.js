import React from "react";
function Cards(props) {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex gap-3">
        <div className=" border-4 border-blue-500  bg-gray-200 overflow-scroll w-[16rem] h-[24rem]">
          <div className="p-1 font-bold">{props.list[0].title}</div>
          {props.list[0].children.map((item, i) => (
            <div className="bg-white m-1 border-2 my-2" key={i}>
              <p>{item.text}</p>
            </div>
          ))}
          <div className="px-1 mt-2"> ➕ Add another Card</div>
        </div>
        <div className="border-4 border-blue-500 bg-gray-200 overflow-scroll w-[16rem] h-[32rem]">
          <div className="p-1 font-bold">{props.list[1].title}</div>
          {props.list[1].children.map((item, i) => (
            <div key={i} className="bg-white m-1  border-2 my-2">
              <p>{item.text}</p>
            </div>
          ))}
          <div className="px-1 mt-2"> ➕ Add another Card</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
