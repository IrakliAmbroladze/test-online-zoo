import { useEffect, useState } from "react";
import type { Status } from "../types/Status";
import type { Camera } from "../types/Camera";
import { fetchCameras } from "../lib/fetchCameras";

export const Cameras = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  useEffect(() => {
    fetchCameras()
      .then((data) => {
        setCameras(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err instanceof Error ? err.message : err);
        setStatus("error");
      });
  }, []);

  if (status === "loading")
    return <div className="loader">Loading cameras...</div>;
  if (status === "error")
    return (
      <p className="error">Something went wrong. Please, refresh the page</p>
    );

  return (
    <div id="cameras-pet-list" className="cameras-pet-list">
      {cameras.map((camera) => (
        <div className="pet-camera-card">{camera.text}</div>
      ))}
    </div>
  );
};
