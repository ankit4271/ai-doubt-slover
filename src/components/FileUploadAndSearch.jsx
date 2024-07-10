import React, { useState, useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FileUploadIcon from "@mui/icons-material/FileUpload";

function FileUploadAndSearch() {
  const [files, setFiles] = useState([]);
  const [searchText, setSearchText] = useState("");

//   const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileRef = useRef(null);

  console.log("files", files);
  console.log("searchText", searchText);
//   console.log("uploadedFiles", uploadedFiles);

  const handleMultipleChange = (event) => {
    setFiles([...event.target.files]);
  };

  const dummyPromise = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  const handleMultipleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFiles";
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    dummyPromise(files).then((files) => {
    //   setUploadedFiles(files);
        console.log('files api', files);
    });

    // axios.post(url, formData, config)
    //   .then((response) => {
    //     console.log(response.data);
    //     setUploadedFiles(response.data.files);
    //   })
    //   .catch((error) => {
    //     console.error("Error uploading files: ", error);
    //   });
  };

  const handelChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
      <div class="ai-bottom-bar">
        <div style={{ display: "flex" }}>
              {files.map((file, index) => (
                <div title={file?.name} key={index} className="uploaded-files" style={{width: "45px", height:'45px'}}>
                  <img
                    src={file?.name}
                    // alt={ file?.name || `content ${index}`}
                  />
                </div>
              ))}
            </div>
        <div class="ai-attech-item"  style={{width:'100%'}}>
          <div className="fileUplpad section" style={{display:'flex'}}>
            <form>
              <AttachFileIcon onClick={() => fileRef?.current.click()} />
              <input
                type="file"
                hidden
                ref={fileRef}
                multiple
                onChange={handleMultipleChange}
              />

              {/* <button type="submit">Upload</button> */}
            </form>
            
          </div>
          <div className="ai-searchbar">
            <input
              type="text"
              value={searchText}
              placeholder="Message ChatGPT"
              onChange={(e) => handelChange(e)}
            />
          </div>
          <div class="ai-sendbtn">
            <FileUploadIcon onClick={handleMultipleSubmit}/>
          </div>
        </div>
      </div>
  );
}

export default FileUploadAndSearch;
