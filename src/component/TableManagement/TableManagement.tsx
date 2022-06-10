import { useContext } from "react";
import { CountersContext } from "../../context/counters";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import ShareCodeCreator from "../../utils/ShareCodeCreator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./TableManagement.scss";
import Button from "../Button/Button";
import ShareCodeSplitter from "../../utils/ShareCodeSplitter";
import { ISyndicate } from "../../interfaces/ISyndicate";
import { SyndicateContext } from "../../context/members";
import Extras from "../Extras/Extras";

const TableManagement = () => {
  const { counters, setCounters, setShareCode } =
    useContext<CountersContextProps>(CountersContext);
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const resetCounters = () => {
    setCounters((previousCounters) => {
      return previousCounters.map((counter) => {
        return { ...counter, count: 0 };
      });
    });
    toast("Cleared!");
  };

  const loadDefaultCounters = () => {
    const defaultShareCode: string =
      "0200112001000032301200013233310211112002211002000001101011012301100000220122212202112";
    members.forEach((member, columnIndex) => {
      const loadedCounter = ShareCodeSplitter(defaultShareCode, columnIndex);
      const found = counters.find((item) => item.field === member.name);
      if (found) {
        found.count = loadedCounter;
      }
    });
    setCounters((previousCounters) => {
      return [...previousCounters];
    });
    toast("Loaded!");
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

  return (
    <div className="table-management-container">
      <div className="share-area">
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={1}
          closeButton={false}
        />
        <div className="share-container">
          <Button onClick={() => handleShare()} width="100%" fontSize="1.2rem">
            Copy Code to Clipboard
          </Button>
          <span className="share-info">It will make an URL for you!</span>
        </div>
        <div className="clear-container">
          <Button
            onClick={() => resetCounters()}
            width="100%"
            fontSize="1.2rem"
          >
            Clear Cheat Sheet
          </Button>
          <span className="share-info">It will reset to blank cells.</span>
        </div>
        <div className="load-defaultcode-container">
          <Button
            onClick={() => loadDefaultCounters()}
            width="100%"
            fontSize="1.2rem"
          >
            Load Default
          </Button>
          <span className="share-info">The most common cheat sheet.</span>
        </div>
      </div>
      <Extras></Extras>
    </div>
  );
};

export default TableManagement;
