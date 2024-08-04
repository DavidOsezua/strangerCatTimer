import React from "react";
import "../App.css";
import { Element } from "react-scroll";

export const TwitterBtn = () => {
  return (
    <span>
      <svg
        width="18"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2434 0.25H20.5527L13.3246 8.50937L21.8277 19.75H15.1715L9.9543 12.9344L3.9918 19.75H0.677734L8.40742 10.9141L0.255859 0.25H7.08086L11.7918 6.47969L17.2434 0.25ZM16.0809 17.7719H17.9137L6.08242 2.125H4.11367L16.0809 17.7719Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

export const TelegramBtn = () => {
  return (
    <span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4383 1.62171L18.2695 16.5655C18.0305 17.6201 17.407 17.8826 16.5211 17.3858L11.693 13.828L9.3633 16.0686C9.10548 16.3264 8.88986 16.542 8.39298 16.542L8.73986 11.6248L17.6883 3.5389C18.0774 3.19202 17.6039 2.99983 17.0836 3.34671L6.02111 10.3123L1.25861 8.82171C0.222672 8.49827 0.203922 7.78577 1.47423 7.2889L20.1024 0.112333C20.9649 -0.211105 21.7195 0.30452 21.4383 1.62171Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

const Socials = () => {
  return (
    <Element name="community">
      <div className="section flex gap-3 justify-center pt-0">
        <a
          href="https://t.me/strangercats01"
          target="_blank"
          className="border-[1px] border-[#ff1515] w-[160px] text-[#fff] list-none flex gap-2 items-center justify-center py-[0.5rem] rounded-full"
        >
          <TelegramBtn />
          <p>Telegram</p>
        </a>
        <a
          target="_blank"
          href="https://x.com/strangercatsol?s=11&t=gFKcOja2ZLWSWrWOKvMCgQ"
          className="border-[1px] border-[#ff1515] w-[160px] text-[#fff] list-none flex gap-2 items-center justify-center py-[0.5rem] rounded-full"
        >
          <TwitterBtn />
          <p href="">twitter</p>
        </a>
      </div>
    </Element>
  );
};

export default Socials;
