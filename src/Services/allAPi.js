import { baseUrl } from "./baseUrl";
import { commonApi } from "./commonapi";

// uploading video
export const uploadVideo = async (video) => {
  // http request to url for upladoing video in json server anfd return response to add component.
  return await commonApi("POST", `${baseUrl}/video`, video);
};

// get all video from json server

export const getAllVideo = async () => {
  // http request to url for getting video in json server and return response to view component.

  return await commonApi("GET", `${baseUrl}/video`, "");
};

// get a single video from json server

export const getSingleVideo = async (id) => {
  return await commonApi("GET", `${baseUrl}/video/${id}`, "");
};

// delete a sinlge video frpm json server

export const deleteVideo = async (id) => {
  return await commonApi("DELETE", `${baseUrl}/video/${id}`, {});
};

// adding category

export const addCategory = async (body) => {
  return await commonApi("POST", `${baseUrl}/category`, body);
};

//get all category
export const getAllCAtegory = async () => {
  return await commonApi("GET", `${baseUrl}/category`, "");
};
// insert video in watchhistory
export const addToHistory = async (videoHistory)=>{
    //http post request for ading vieo history to json-server and return response
    return await commonApi("POST",`${baseUrl}/history`,videoHistory)
}
//getHistory
export const getHistory =async ()=>{
  return await commonApi("GET",`${baseUrl}/history`,"")

}
//remove category
export const deleteCategory = async(id)=>{
  return await commonApi("DELETE",`${baseUrl}/category/${id}`,{})
}

export const updateCategory = async (id,UpdtedCategory)=>{
  //http put request for updating existing category from json server and return response to category component
  return await commonApi("PUT",`${baseUrl}/category/${id}`,UpdtedCategory )
}

//deletre history from history
export const  deleteHistory = async(id)=>{
  return await commonApi("DELETE",`${baseUrl}/history/${id}`,{})
}