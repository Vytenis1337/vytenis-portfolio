import React from "react";

import { sideLinks } from "../utils/sideLinkServices";

export const SideLinks = () => {
  return (
    <div className="hidden xl:flex flex-col top-[50%] left-0 fixed ">
      <ul>
        {sideLinks.map(({ id, href, download, child, text }) => (
          <li
            key={id}
            className="group flex justify-between items-center w-40 h-20 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover: rounded-md duration-300"
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
              className="flex justify-between items-center w-full text-white group-hover:text-yellow-400"
            >
              {text}
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
