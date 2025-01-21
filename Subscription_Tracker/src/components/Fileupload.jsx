import React from 'react';
import 'animate.css';
import { MDBContainer, MDBBtn, MDBIcon, MDBFile } from 'mdb-react-ui-kit';
import {useState} from 'react'



function Fileupload() {
  const [files, setFiles] = useState([]); 

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFiles([...files, selectedFile]);
    }
  };

  return (
    <>
    <div class="container-flui Hero my-5">
        <h2 className='animate__animated animate__zoomInLeft herostatement animate__delay-0.1s '> Start Managing Your Subscriptions Now!</h2>
      
      </div>
    
    <MDBContainer className=" container-fluid text-center mt-5">
    <h3 className="mb-4 animate__animated animate__zoomIn animate__delay-1s">Upload Your Bank Statement Here</h3>
     
      <div className="d-flex justify-content-center align-items-center flex-column  C">
      <MDBBtn
        tag="label"
        color="danger"className='animate__animated animate__zoomIn animate__delay-1s'
       
        style={{ borderRadius: '5px' }}
      >
        {files.length === 0 ? "Upload File" : "+"}
    
        <input
          type="file"
          onChange={handleFileChange}
          accept="application/pdf,application/vnd.ms-excel"
          style={{ display: 'none' }}
        />
      </MDBBtn>
      
      </div>

      
      <div style={{ marginTop: '20px' }}>
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              {file.name}
            </div>
          ))}
      </div>
      </MDBContainer>
    </>
  );
}


 





/*

function Fileupload(){
    return(
       
        <>
            <Herosection/>
        <MDBContainer className=" container-fluid text-center mt-5">
      <h3 className="mb-4 animate__animated animate__zoomIn animate__delay-1s">Upload Your Bank Statement Here</h3>
      
      <div className="d-flex justify-content-center align-items-center flex-column  C">
      
        
      <MDBBtn tag="label" color="danger" className='animate__animated animate__zoomIn animate__delay-1s' style={{ borderRadius: '5px' }}>
        Upload File
        <input 
          type="file" 
          name="upload" 
          accept="application/pdf,application/vnd.ms-excel" 
          style={{ display: 'none' }} 
        />
      </MDBBtn>

              
          
        
      
      </div>
    </MDBContainer>
    </>
    );

}*/ 
export default Fileupload