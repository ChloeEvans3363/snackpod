import logo from "../assets/wordmark_popcorn-cherrygummybear.svg";
import fontLogo from "../assets/brandmark_main.svg";
import TextInput from "../components/Form";
import Button from "../components/Button";
import "../style/Record.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export function Record() {
  // Audio format for recording
  const mimeType = "audio/webm";

  // Ref to hold the MediaRecorder instance throughout component lifecycle
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  // State to track recording status: "inactive" or "recording"
  const [recordingStatus, setRecordingStatus] = useState<string>("inactive");
  // State to hold the audio stream from the user's microphone
  const [stream, setStream] = useState<MediaStream | null>(null);
  // State to store audio data chunks as they're recorded
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  // State to store the playable audio URL after recording is complete
  const [audio, setAudio] = useState<string | null>(null);

  const startRecording = async () => {
    console.log("startRecording called");

    // Check if the browser supports MediaRecorder API
    if ("MediaRecorder" in window) {
      try {
        // Request microphone access from the user
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        // Store the audio stream so it can be used for recording
        setStream(streamData);

        // Mark that recording is now in progress
        setRecordingStatus("recording");
        // Create a new MediaRecorder instance with the microphone stream
        if (stream == null) return;

        const media = new MediaRecorder(stream, { mimeType: mimeType });
        // Store the MediaRecorder in a ref so we can access it in other functions
        mediaRecorder.current = media;
        // Start recording audio
        mediaRecorder.current.start();
        // Initialize an array to temporarily store audio chunks during recording
        let localAudioChunks: Blob[] = [];
        // When audio data is available, capture it and add to the array
        mediaRecorder.current.ondataavailable = (event) => {
          if (typeof event.data === "undefined") return;
          if (event.data.size === 0) return;
          localAudioChunks.push(event.data);
        };
        // Save the chunks to component state
        setAudioChunks(localAudioChunks);
      } catch (err) {
        // User denied permission or error occurred
        alert((err as Error).message);
      }
    } else {
      // Browser doesn't support MediaRecorder API
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const stopRecording = () => {
    console.log("stopRecording called");
    // Mark recording as inactive so UI buttons change
    setRecordingStatus("inactive");
    // Stop the recording instance
    if (mediaRecorder.current != null) {
      mediaRecorder.current.stop();
      // Set up handler for when recording has stopped
      mediaRecorder.current.onstop = () => {
        // Creates a blob file from the audio chunks data
        const audioBlob = new Blob(audioChunks, { type: mimeType });
        // Creates a playable URL from the blob file
        const audioUrl = URL.createObjectURL(audioBlob);
        // Store the URL so we can display/download the recording
        setAudio(audioUrl);
        // Clear the chunks array since they're now stored as a blob
        setAudioChunks([]);
      };
    }
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
        {audio
          ? (() => {
              console.log("Rendering: audio player");
              return (
                <div>
                  {" "}
                  <audio src={audio} controls></audio>
                  <a download href={audio}>
                    <p>Download Recording</p>
                  </a>
                </div>
              );
            })()
          : null}

        {/* Show "Start Recording" button if not currently recording */}
        {recordingStatus === "inactive" ? (
          <>
            {console.log("Rendering: Start Recording button")}
            <Button
              color="outline-primary"
              buttonName="recordButton"
              onClick={startRecording}
            >
              <span>
                <img
                  src={fontLogo}
                  className="buttonLogo"
                  alt="Snackpod logo"
                />
              </span>
            </Button>
          </>
        ) : null}
        {/* Show "Stop Recording" button while recording is in progress */}
        {recordingStatus === "recording" ? (
          <>
            {console.log("Rendering: Stop Recording button")}
            <Button
              color="outline-primary"
              buttonName="recordButton"
              onClick={stopRecording}
            >
              <span>
                <img
                  src={fontLogo}
                  className="buttonLogo"
                  alt="Snackpod logo"
                />
              </span>
            </Button>
          </>
        ) : null}

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
