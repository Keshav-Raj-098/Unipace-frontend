import React from 'react'
import { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import "./buttonstyle.css"
import { RxCross2 } from "react-icons/rx";


const AddButton = ({ name,setnewArray,array }) => {

    const [value, setValue] = useState("")

    const styels = {
        input: { height: "35px", width: "250px", border: "1px solid rgba(214, 221, 235, 1)", outline: "none", padding: "4px 8px" },

    }


    const addItem = () => {
        if (value.trim() !== "") {
            setnewArray([...array, value]);
            setValue("");
        }
    };

    const removeItem = (index) => {
        const updatedStore = array.filter((_, i) => i !== index);
        setnewArray(updatedStore);
    };

    


    return (
        <div style={{width:"440"}}>
            { array.length<5 &&
            <div className=' flex flex-row gap-2'>

                <input type="text"
                    style={styels.input}
                    value={value} onChange={(e) => { setValue(e.target.value) }} 
                    maxLength={10}/>
                <span className='flex flex-row items-center gap-1'
                  onClick={addItem}
                    style={{
                        height: "35px", padding: "4px 10px",
                        border: "1px solid rgba(204, 204, 245, 1)", cursor: "pointer",
                        color: "rgba(70, 64, 222, 1)",
                    }}
                ><IoMdAdd color='rgba(70, 64, 222, 1)' /> 
                <span style={{ fontSize: "15px", fontWeight: "700",
                        fontFamily: "Epilogue, sans-serif"}}
                      
                
                >Add {name || "Skill"}</span> </span>
            </div>
            }

            <div className='w-full containerr'>
              
            {array?.map((item, index) => (

                    <div key={index} className='item flex items-center justify-between'>
                        {item}
                        <RxCross2
                            className='hover:cursor-pointer'
                            onClick={() => removeItem(index)}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AddButton
