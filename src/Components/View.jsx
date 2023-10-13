import React, { useEffect, useState } from "react";
import VideoCard from "../Components/VideoCard";
import { Col, Row } from "react-bootstrap";
import { getAllVideo } from "../Services/allAPi";

function View({uploadVideoServerRespnse}) {
  const [allVideos,setAllVideo] =useState([])
  const[removeVideo,setRemoveVideo]=useState(false)
  const getAllUploadVideos = async () => {
    const { data } = await getAllVideo();
    setAllVideo(data);
  };
  useEffect(() => {
    setRemoveVideo(false)
    getAllUploadVideos();
  }, [uploadVideoServerRespnse,removeVideo]);
  return (
    <>
      <Row>
       {
       allVideos?.length>0?
       allVideos?.map((item)=>{
        return (<Col sm={12} md={6} lg={3} xl={3} >
          <VideoCard displayData={item} setRemoveVideo={setRemoveVideo}/>
        </Col>)
       })
        : <p className="fw-bolder fs-5 text-danger mt-3">Sorry Nothing to display</p>
        }
      </Row>
    </>
  );
}

export default View;
