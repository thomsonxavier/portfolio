import React from 'react';
import { HiOutlineLink } from 'react-icons/hi';

function Project({ title, description, logo, linkText, link }) {


  return (
    <div className=" ">
      <div className=''>
        <div className="group relative animated-feature-cards hover:bg-gradient-to-b hover:from-primary-400 hover:to-primary-500 hover:dark:from-primary-800 hover:dark:to-primary-700">
          <div
            className="animated-feature-cards relative w-full drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)]"
            style={{ "--x": "279px", "--y": "312.59375px" }}
          >
            <div className="group relative h-full w-full overflow-hidden rounded-3xl border bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 md:hover:border-transparent lg:bg-gradient-to-br">
              <div className="mx-5 my-10 w-full">
                <div className="mb-5 flex w-4/5 flex-col gap-3">
                  <div>
                  <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-8 mr-2 mb-5"
                />
                    <h2 className="text-xl font-bold tracking-tight md:text-xl">{title}</h2>
                    <a href={link} target="_blank" className='text-[#65656d] mt-2 items-center flex gap-x-2' rel="noopener noreferrer">
                      <HiOutlineLink />
                      {linkText}
                    </a>
                  </div>
                  <p className="text-sm leading-5 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
