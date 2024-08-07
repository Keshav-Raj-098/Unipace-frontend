import React from 'react'
import { useState, useCallback } from 'react';
import img from "../../assets/img.svg"

const Uploadimg = ({ selectedFile, setSelectedFile }) => {

    const [dragActive, setDragActive] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const handleDrag = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === 'dragenter' || event.type === 'dragover') {
            setDragActive(true);
        } else if (event.type === 'dragleave') {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setSelectedFile(event.dataTransfer.files[0]);
            setUploaded(true)
        }
    }, []);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUploaded(true)
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file first');
            return;
        }
    }

    return (

        <div
            className='p-4 flex flex-row justify-center items-center'
            style={{
                border: "2px dashed #1986d2", margin: "15px",
                width: "350px", height: "120px", borderRadius: "10px",
                backgroundColor: dragActive && "#f8f8fd"

            }}

            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
        >

            {uploaded ?
                (
                    <div className='flex flex-col items-center'>
                        <a href={URL.createObjectURL(selectedFile)} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="img" height="25px" width="25px" />
                        
                        
                        </a>
                        <span
                            style={{ fontSize: "14px", color: "#7C8493", textAlign: "center" }}
                        >{selectedFile.name}
                        </span>
                    </div>
                ) :

                (
                    <div className='flex flex-col items-center' style={{ width: "80%" }}

                    >

                        <img src={img} alt="img" height="25px" width="25px" />

                        <span style={{ fontSize: "14px", color: "#7C8493", textAlign: "center" }}>
                            <label
                                className="hover:cursor-pointer"
                                style={{ color: "#1986d2", cursor: "pointer" }}
                                htmlFor="file-upload"
                            >
                                Click to replace
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                            {` `}or drag and drop Jpg or Png file {`(max. 400 x 400px)`}
                        </span>

                    </div>


                )}

        </div>

    )
}

export default Uploadimg
