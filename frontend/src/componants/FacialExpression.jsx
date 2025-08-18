import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import axios from 'axios';

export default function FaceExpressionDetector( {setSongs}) {
  const videoRef = useRef();
  const [mood, setMood] = useState("No mood detected yet");

  // Load models and start video once
  useEffect(() => {
    const loadModelsAndStart = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

      // Start webcam
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Webcam error:", err);
      }
    };

    loadModelsAndStart();
  }, []);

  // 🎯 Detect mood on button click
  const detectMood = async () => {
    const video = videoRef.current;

    if (!video) return;

    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
      
    if (!detections || detections.length === 0) {
      setMood("No face detected");
      return;
    }

    // Find highest expression
    let max = 0;
    let currentMood = "neutral";
    for (const [expression, confidence] of Object.entries(detections[0].expressions)) {
      if (confidence > max) {
        max = confidence;
        currentMood = expression;
        // console.log(expression);
        axios.get(`https://moodmelody-shih.onrender.com/songs?mood=${expression}`)
        .then(response=>{
          // console.log(response.data);
          setSongs(response.data.songs)
          
        })
        
      }
    }

    setMood(currentMood);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ width: "500px", border: "1px solid var(--card-hover)", marginBottom: "10px", borderRadius: "12px" }}
      />
      <br />
      <button
        onClick={detectMood}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "var(--accent)",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
  
        }}
        
      >
        Detect Mood
      </button>
      <h2 style={{ marginTop: "20px" }}>Detected Mood: {mood}</h2>
    </div>
  );
}
