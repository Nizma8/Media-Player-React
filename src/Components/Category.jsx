import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addCategory,
  deleteCategory,
  getAllCAtegory,
  getAllVideo,
  getSingleVideo,
  updateCategory,
} from "../Services/allAPi";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [displayCatgories, setdisplayCatgories] = useState([]);
  const addCategoryName = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allVideos: [],
      };
      const response = await addCategory(body);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        setCategoryName("");
        handleClose();
      } else {
        toast.warning("uploading error!! please try after sometime");
      }
    } else {
      toast.info("please fill the form completely");
    }
  };

  const displayAllCategory = async () => {
    const { data } = await getAllCAtegory();
    setdisplayCatgories(data);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const removeCategory = async (id) => {
    // make api call
    const { data } = await deleteCategory(id);
    displayAllCategory();
  };
  useEffect(() => {
    displayAllCategory();
  }, [categoryName]);
  const dragOverCategory = (e) => {
    e.preventDefault();
  };
  const videoDrop = async (e, categorId) => {
    const videoId = e.dataTransfer.getData("CardId");
    // getVIdeodeTAILS
    const { data } = await getSingleVideo(videoId);
    let selectedCategory = displayCatgories.find(
      (item) => item.id === categorId
    );
    selectedCategory.allVideos.push(data);
    await updateCategory(categorId, selectedCategory);
    displayAllCategory();
  };
  return (
    <>
      <div className="d-grid ">
        <button className="btn btn-info" onClick={handleShow}>
          Add Category
        </button>
      </div>
      {displayCatgories ? (
        displayCatgories.map((item) => {
          return (
            <div
              className="border p-2 border-light rounded mt-3 mb-3"
              key={item?.id}
              droppable
              onDragOver={(e) => dragOverCategory(e)}
              onDrop={(e) => videoDrop(e, item?.id)}
            >
              <div className="d-flex justify-content-between">
                <h5>{item?.categoryName}</h5>
                <button
                  className="bg-black"
                  style={{ border: "none" }}
                  onClick={() => {
                    removeCategory(item?.id);
                  }}
                >
                  <i className="fa-solid fa-x  text-danger"></i>
                </button>
              </div>

              <Row>
                {item?.allVideos &&
                  item?.allVideos.map((Card) => {
                    return (
                      <Col sm={10} className="ms-4 mt-2">
                        <VideoCard displayData={Card} insideContainer />
                      </Col>
                    );
                  })}
              </Row>
            </div>
          );
        })
      ) : (
        <p className="fw-bolder text-danger mt-3">Nothing to display!!</p>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  category name"
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCategoryName}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </>
  );
}

export default Category;
