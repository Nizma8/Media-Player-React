import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addToHistory, deleteVideo } from "../Services/allAPi";

function VideoCard({ displayData, setRemoveVideo,insideContainer }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // add video to watch history

    setShow(true);
    // get timpe stambo for play the video
    const today = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
      today
    );

    const { caption, EmbbedLink } = displayData;
    const videoHistory = {
      caption,
      EmbbedLink,
      formattedDateTime,
    };

    await addToHistory(videoHistory);
  };
const RemoveMedia = async (id) => {
    const Response = await deleteVideo(id);
    setRemoveVideo(true);
  };
const dragStarted=(e,id)=>{
  console.log("Darg started..");
  e.dataTransfer.setData("CardId",id)
}
  return (
    <>
      {displayData && (
        <Card className="mb-3" draggable onDragStart={(e)=>{
          dragStarted(e,displayData.id)
        }}>
          <Card.Img
            variant="top"
            src={displayData?.url}
            style={{ width: "100%", height: "180px" }}
            onClick={handleShow}
          />
          <Card.Body>
            <Card.Title className="d-flex">
              <h6>{displayData?.caption}</h6>
             { insideContainer?"":
             <button
                className="btn"
                onClick={() => {
                  RemoveMedia(displayData?.id);
                }}
              >
                <i className="fa-solid fa-trash ms-2 text-danger fs-5 "></i>
              </button>}
            </Card.Title>
          </Card.Body>
        </Card>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="523"
            src={`${displayData?.EmbbedLink}?autoplay=1`}
            title="React Tutorial for Beginners"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
