import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { IoMdAdd, IoMdClose } from "react-icons/io";

const Step2 = ({description,responsibilities,qualification,skills,selectionProcess,setDescription,setResponsibilities,setQualification,setSkills,setSelectionProcess }) => {

    

    const styles = {
        title: { 
            fontFamily: "Epilogue, sans-seri",
            fontSize: "16px", 
            fontWeight: "600", 
            color: "rgba(37, 50, 75, 1)", },
        subtitle: { 
            fontFamily: "Epilogue, sans-seri",
            fontSize: "14px", 
            fontWeight: "400",
             color: "rgba(81, 91, 111, 1)", marginTop: "8px" }
    }

    return <div className="py-3">

        <div className='flex flex-col w-full pb-3'
            style={{borderBottom: "2px solid #f4f6fa" }}>
            <span style={styles.title}>  Details</span>

            <span
                style={styles.subtitle}
            >Add the description of the job, responsibilities, who you are, and nice-to-haves.</span>




        </div>

        {/*Job Title */}
        <div className='flex flex-row py-5'

            style={{
                fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
                gap: "25px"
            }}>


            <div className='flex flex-col'
                style={{ width: '40%' }}
            >
                <span style={styles.title}>
                    Job Descriptions
                </span>
                <span style={styles.subtitle}>
                    Job titles must be describe one position
                </span>
            </div>

            <div className='flex flex-col justify-start'
            >
                <textarea
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                    style={{
                        outline: "none", padding: "7px 10px", width: "400px", height: "150px",
                        border: "1px solid rgba(214, 221, 235, 1)", color: "rgba(37, 50, 75, 1)", marginBottom: "5px", overflowY: "auto", scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                    placeholder='Enter Job Description'
                ></textarea>

                <span
                    style={{
                        fontSize: "14px", fontWeight: "400",
                        color: "rgba(81, 91, 111, 1)",
                    }}
                >
                    At max 500 characters allowed
                </span>

            </div>
        </div>


        {/* Type of Employment */}
        <div className='flex flex-row py-5'

            style={{
                fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
                gap: "25px"
            }}>


            <div className='flex flex-col'
                style={{ width: '40%' }}
            >
                <span style={styles.title}>
                    Responsibilities
                </span>
                <span style={styles.subtitle}>
                    Outline the core responsibilities of the position
                </span>
            </div>

            <div className='flex flex-col justify-start'
            >
                <LineBar array={responsibilities} setFunction={setResponsibilities} />

            </div>
        </div>




        {/* Qualification */}
        <div className='flex flex-row py-5'

            style={{
                fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
                gap: "25px"
            }}>


            <div className='flex flex-col'
                style={{ width: '40%' }}
            >
                <span style={styles.title}>
                    Who You Are
                </span>
                <span style={styles.subtitle}>
                    Add your preferred candidates qualifications
                </span>
            </div>

            <div className='flex flex-col justify-start'
            >
                <LineBar array={qualification} setFunction={setQualification}  />


            </div>
        </div>

        {/* Nice to haves */}


        <div className='flex flex-row py-5'

            style={{
                fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
                gap: "25px"
            }}>


            <div className='flex flex-col'
                style={{ width: '40%' }}
            >
                <span style={styles.title}>
                    Nice-To-Haves
                </span>
                <span style={styles.subtitle}>
                    Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply
                </span>
            </div>

            <div className='flex flex-col justify-start'
            >
                <LineBar array={skills} setFunction={setSkills}  />
            </div>
        </div>


        {/* Selection Process */}


        <div className='flex flex-row py-5'

            style={{
                fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
                gap: "25px"
            }}>


            <div className='flex flex-col'
                style={{ width: '40%' }}
            >
                <span style={styles.title}>
                    Selection Process
                </span>
                <span style={styles.subtitle}>
                    Specify the selection process 
                </span>
            </div>

            <div className='flex flex-col justify-start'
            >
                <LineBar array={selectionProcess} setFunction={setSelectionProcess}  />
            </div>
        </div>







    </div>


}


const LineBar = ({array,setFunction}) => {
    const [fields, setFields] = useState([{ id: 1 }]);
    const initialized = useRef(false); // To track initialization

    // Initialize fields from the array prop if not already done
    useEffect(() => {
        if (!initialized.current && array?.length > 0) {
            setFields(array.map((text, index) => ({ id: index + 1, text })));
            initialized.current = true;
        } else if (fields.length === 0) {
            setFields([{ id: 1, text: '' }]);
        }
    }, [array, fields?.length]);
    

    const addField = () => {
        setFields([...fields, { id: fields.length + 1, text: '' }]);
    };

   
    const deleteField = (id) => {
        // Filter out the field to be deleted
        const updatedFields = fields.filter(field => field.id !== id);
        // Update the state
        setFields(updatedFields);
        // Call setFunction with the updated array of text
        if (setFunction) {
            setFunction(updatedFields.map(field => field.text));
        }
    };


    const handleTextChange = (id, text) => {
        const updatedFields = fields.map(field =>
            field.id === id ? { ...field, text } : field
        );
        setFields(updatedFields);
        // Call setFunction with the array of text from all fields
        if (setFunction) {
            setFunction(updatedFields.map(field => field.text));
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            {fields.map((field, index) => (
                <div key={field.id} className='flex flex-row justify-start items-center gap-2'>
                    <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)" }}>
                        {index + 1}.
                    </span>
                    <TextareaAutosize
                        value={field.text || array && array[index]}
                        onChange={(e) => handleTextChange(field.id, e.target.value)}

                        style={{
                            outline: "none",
                            padding: "0px 4px",
                            width: "400px",
                            borderBottom: "1px solid rgba(214, 221, 235, 1)",
                            color: "rgba(37, 50, 75, 1)",
                            marginBottom: "5px",
                            overflowY: "auto",
                            scrollbarWidth: "none", // For Firefox
                            msOverflowStyle: "none",
                            resize: "none"
                        }}
                    />

                    {index === fields.length - 1 && (
                        <div className="flex gap-2">
                            <span
                                style={{ backgroundColor: "#e9ebfd", padding: "5px", borderRadius: "50%", cursor: "pointer" }}
                                onClick={addField}
                            >
                                <IoMdAdd size={"18px"} color='#707785' />
                            </span>
                            {index !== 0 &&
                                <span
                                    style={{ backgroundColor: "#fde9e9", padding: "5px", borderRadius: "50%", cursor: "pointer" }}
                                    onClick={() => deleteField(field.id)}
                                >
                                    <IoMdClose size={"18px"} color='#e57373' />
                                </span>}

                        </div>
                    )}





                </div>
            ))}
        </div>
    );
};


export  {Step2,LineBar}