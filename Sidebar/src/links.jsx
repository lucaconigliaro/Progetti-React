import React from "react";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { socialLinks } from "./linksData.js";

const iconMap = {
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
};

const SocialBar = () => {
  return (
    <ul className="social">
      {socialLinks.map(({ id, url, iconName }) => {
        const Icon = iconMap[iconName];
        return (
          <li key={id}>
            <a href={url}>
              <Icon className="icon" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialBar;
