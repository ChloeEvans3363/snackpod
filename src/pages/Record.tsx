import logo from "../assets/wordmark_popcorn-cherrygummybear.svg";
import fontLogo from "../assets/brandmark_main.svg";
import TextInput from "../components/Form";
import Button from "../components/Button";
import "../style/Record.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import saveFile from "../components/Save";

export function Record() {
  const handleRecordClick = () => {
    return;
  };

  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="logo snackpod" alt="Snackpod logo" />
        <h1>New Pod</h1>
        <p>Tap mic to start & stop recording</p>
      </div>
      <div className="cancelDiv">
        <Link to="/Feed">
          <Button color="outline-primary" buttonName="cancelButton">
            Cancel
          </Button>
        </Link>
      </div>
      <div className="recordingContainer">
        <Button
          color="outline-primary"
          buttonName="recordButton"
          onClick={handleRecordClick}
        >
          <span>
            <img src={fontLogo} className="buttonLogo" alt="Snackpod logo" />
          </span>
        </Button>
        <div className="inputContainer">
          <TextInput type="text">Pod title</TextInput>
          <TextInput type="text">Category (e.g. Comedy)</TextInput>
          <Link to="/Feed">
            <Button color="primary" buttonName="uploadButton">
              Upload Pod
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Record;
