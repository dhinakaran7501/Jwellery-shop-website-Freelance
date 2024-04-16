import React from "react";
import { FaShareAlt, FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import "./Share.css";

import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  InstapaperIcon,
} from "react-share";

const ShareButtons = ({ url, title, handleShare, shareBtn }) => {
  return (
    <>
      <div className="model">
        <div className="modal-header">
          <h2>Share</h2>
          <button className="modal-close" onClick={handleShare}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <InstapaperShareButton url={url} title={title}>
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>

          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default ShareButtons;
