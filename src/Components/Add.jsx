import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../Services/allAPi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({ setuploadVideoServerRespnse }) {
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    EmbbedLink: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extractLink = (e) => {
    const { value } = e.target;
    if (value) {
      const emmbed = `https://www.youtube.com/embed/${value.slice(-11)}`;
      setVideo({ ...video, EmbbedLink: emmbed });
    } else {
      setVideo({ ...video, EmbbedLink: "" });
    }
  };

  const handleUpload = async () => {
    //make api call
    const { id, caption, url, EmbbedLink } = video;
    if (!id || !caption || !url || !EmbbedLink) {
      toast.warning("please fill the form");
    } else {
      const response = await uploadVideo(video);
     
      if (response.status >= 200 && response.status < 300) {
        // reset state
        setVideo({  id: "",
        caption: "",
        url: "",
        EmbbedLink: "",})
        toast.success(`${response.data.caption} is uploaded succesfully`);
        // set server response
        setuploadVideoServerRespnse(response.data);
        //modal hide
        handleClose();
      } else {
        toast.error("Uploading error!! please try after sometime");
      }
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button className="btn ms-2" onClick={handleShow}>
          {" "}
          <i className="fa-solid fa-circle-plus  fs-4"></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter video Id"
                onChange={(e) => {
                  setVideo({ ...video, id: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter video Caption"
                onChange={(e) => {
                  setVideo({ ...video, caption: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter video Url"
                onChange={(e) => {
                  setVideo({ ...video, url: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter youtube Video Link "
                onChange={extractLink}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Add;
