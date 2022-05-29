import { useContext } from "react";
import { CountersContext } from "../../context/counters";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import ShareCodeCreator from "../../utils/ShareCodeCreator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Share.scss";
import Button from "../Button/Button";

const Share = () => {
  const { counters, setCounters, setShareCode } =
    useContext<CountersContextProps>(CountersContext);

  const resetCounters = () => {
    setCounters((previousCounters) => {
      return previousCounters.map((counter) => {
        return { ...counter, count: 0 };
      });
    });
    toast("Cleared!");
  };

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
      <div className="share-container">
        <Button textValue="Copy to Clipboard" onClick={() => handleShare()} />
        <span className="share-info">
          This will copy the share url to your clipboard. Anybody opening that
          link will see the same Cheat Sheet as you.
        </span>
      </div>
      <div className="clear-container">
        <Button textValue="Clear Cheat Sheet" onClick={() => resetCounters()} />
        <span className="share-info">
          This will clear your Betrayal Cheat Sheet.
        </span>
      </div>
    </div>
  );
};

export default Share;
