import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import getData from "./AI_JobDes"
import Loader from "./loader/loader"
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';





const SpringModal = ({ IsOpen, setIsOpen, setnewJD, loading, setloading }) => {



  const textArea = useRef("")



  const handleClick = async () => {

    let JobDescription = textArea.current.value.toString()
    setloading(true)
    setnewJD(await getData(JobDescription))

  }

  return (

    <AnimatePresence>
      {IsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer h-full "
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white  px-4 pt-2 pb-3 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden text-black"
          >
            {
              loading ? <Loader /> :

                <div className="flex flex-col justify-between gap-1">

                  <div className="flex flex-row justify-end">

                    <IconButton onClick={()=>{setIsOpen(false)}} 
                      ><ClearIcon/></IconButton>

                    </div>

                    <textarea name="Description" ref={textArea}
                      className="w-full rounded-md p-2 h-56 mt-2  mb-4 outline-none"
                      placeholder="
                      Our AI can enhance your job descriptions by improving phrasing and clarity. To ensure accuracy, review the generated text and double-check for specific requirements and company culture. Consider human review for complex descriptions. Track how AI descriptions impact applications!
                      "
                    >

                    </textarea>
                    <div className="flex flex-row justify-end">

                      {/* <button onClick={()=>{setIsOpen(false)}}>Cancel</button> */}
                      <IconButton onClick={handleClick}

                      ><SendIcon/></IconButton>

                    </div>
                  </div>}


                </motion.div>
        </motion.div>
      )}
        </AnimatePresence>
      );
};

      export default SpringModal;

