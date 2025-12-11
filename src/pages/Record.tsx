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
  // State to store the playable audio URL after recording is complete
  const [audio, setAudio] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const timerIntervalRef = useRef<number | null>(null);
  const startTime = useRef<number>(Date.now());
  const stopRecordingTimeoutRef = useRef<number | null>(null);

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

        // Mark that recording is now in progress
        setRecordingStatus("recording");
        // Create a new MediaRecorder instance with the microphone stream
        // Use streamData directly (setStream is async)
        const media = new MediaRecorder(streamData, { mimeType: mimeType });
        // Store the MediaRecorder in a ref so we can access it in other functions
        mediaRecorder.current = media;
        // Initialize an array to temporarily store audio chunks during recording
        let localAudioChunks: Blob[] = [];
        // Attach handlers BEFORE start() to ensure no data is missed
        mediaRecorder.current.ondataavailable = (event) => {
          if (typeof event.data === "undefined") return;
          if (event.data.size === 0) return;
          localAudioChunks.push(event.data);
        };
        // Attach onstop handler BEFORE start() to capture final data
        mediaRecorder.current.onstop = () => {
          // Creates a blob file from the audio chunks data
          const audioBlob = new Blob(localAudioChunks, { type: mimeType });
          // Creates a playable URL from the blob file
          const audioUrl = URL.createObjectURL(audioBlob);
          // Store the URL so we can display/download the recording
          setAudio(audioUrl);

          // Clear the interval
          if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
          }

          setElapsedTime(Math.floor((Date.now() - startTime.current) / 1000));
        };
        // Start recording audio
        mediaRecorder.current.start();

        // Reset timer and startTime HERE (right when recording actually starts)
        startTime.current = Date.now();
        setElapsedTime(0);

        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }

        // Start interval that increments by 1 each second
        timerIntervalRef.current = window.setInterval(() => {
          setElapsedTime(Math.floor((Date.now() - startTime.current) / 1000));
        }, 200);

        stopRecordingTimeoutRef.current = setTimeout(
          stopRecording,
          7 * 60 * 1000
        ); // Auto-stop after 7 minutes
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
    if (
      mediaRecorder.current != null &&
      mediaRecorder.current.state !== "inactive"
    ) {
      // Force emission of buffered data BEFORE stopping (critical for timeout)
      mediaRecorder.current.requestData();
      // Now stop (onstop will fire after all data is emitted)
      mediaRecorder.current.stop();
    }

    if (stopRecordingTimeoutRef.current) {
      clearTimeout(stopRecordingTimeoutRef.current);
      stopRecordingTimeoutRef.current = null;
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
        <div className="recording-timer">
          {Math.floor(elapsedTime / 60)}:
          {String(elapsedTime % 60).padStart(2, "0")}
        </div>
        {audio
          ? (() => {
              console.log("Rendering: audio player");
              return (
                <div>
                  <audio src={audio} controls>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              );
            })()
          : null}
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
