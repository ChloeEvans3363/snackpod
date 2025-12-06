import logo from "../assets/wordmark_popcorn-cherrygummybear.svg";
import fontLogo from "../assets/brandmark_main.svg";
import TextInput from "../components/Form";
import Button from "../components/Button";
import "../style/Record.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import saveFile from "../components/Save";

export function Record() {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const recorder = new MediaRecorder(stream);

          recorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              console.log("Received audio chunk of size:", event.data.size);
              setAudioChunks((prev) => [...prev, event.data]);
            }
          };

          recorder.onstop = () => {
            // Create blob from the current audioChunks state
            setAudioChunks((currentChunks) => {
              const audioBlob = new Blob(currentChunks, { type: "audio/wav" });
              saveFile({ blob: audioBlob });
              return []; // Clear chunks after saving
            });
          };

          setMediaRecorder(recorder);
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    }
  }, []);

  const handleRecordClick = () => {
    if (!mediaRecorder) return;

    if (!isRecording) {
      setAudioChunks([]); // Clear any previous chunks
      mediaRecorder.start(100); // Start recording and get data every 100ms
    } else {
      mediaRecorder.stop(); // The onstop handler will create and save the blob
    }
    setIsRecording(!isRecording);
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
