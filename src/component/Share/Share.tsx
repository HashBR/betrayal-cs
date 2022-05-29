import { useContext, useEffect, useState } from "react";
import { CountersContext } from "../../context/counters";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import ShareCodeCreator from "../../utils/ShareCodeCreator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Share.scss";

const Share = () => {
  const { counters, shareCode, setShareCode } =
    useContext<CountersContextProps>(CountersContext);
  const handleShare = async () => {
    const newCode = counters
      .map((counter) => {
        return String(counter.count).padStart(5, "0");
      })
      .join("");
    setShareCode(newCode);
    await navigator.clipboard.writeText(
      `${window.location.origin}/betrayal-cs?code=${ShareCodeCreator(newCode)}`
    );
    toast("Copied to Clipboard!");
  };

  // useEffect(() => {
  //   console.log(shareCode);
  // }, [shareCode]);
  return (
    <div className="share-area">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        closeButton={false}
      />
      <button className="button-text" onClick={() => handleShare()}>
        Copy to Clipboard
      </button>
      <span className="share-info">
        This will copy the share url to your clipboard. Anybody opening that
        link will see the same Cheat Sheet as you.
      </span>
    </div>
  );
};

export default Share;
