import { MdOutlineWork } from "react-icons/md";

const Work = () => {
  const work = [
    {
      img: "https://www.xerago.com/sites/sites6/files/xerago-fav-icon.png",
      company: " Xerago ",
      role: " web devloper ",
      period: "July-2022 - Present",
    },
    {
      img: "https://internshala.com//favicon.ico?v=5",
      company: "Decatalyst",
      role: "Frontend-dev - intership",
      period: "Nov-2021 – Jan-2022",
    },
  ];
  return (
    <div className=" p-3 lg:p-0   lg:w-5/12 w-full ">
      <div className="rounded-lg shadow-sm outline-1 outline outline-[#f4f4f5] mix-blend-normal">
        <div className=" ">
          <div className=" p-5">
            <div className=" flex items-center">
              <div className="card-icon text-[#acacb4] text-base">
                <MdOutlineWork />
              </div>
              <div className=" text-[#65656d] font-semibold text-sm pl-4">
                Work
              </div>
            </div>
            {work.map((work, index) => (
              <div key={index} className=" text-base pt-5">
                <div className="">
                  <div className=" flex items-center pb-5">
                    <img
                      src={work.img}
                      className=" w-10 h-10 m-1 p-1 mix-blend-normal rounded-full shadow-md mr-4"
                    />
                    <div>
                      <div className=" text-[#65656d] font-bold text-sm ">
                        {work.company}
                      </div>
                      <div className=" text-[#65656d] text-xs">{work.role}</div>
                    </div>
                    <div className="flex ml-auto text-sm font-medium  text-[#acacb4]">
                      {work.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
