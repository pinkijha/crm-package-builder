import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";

const AddServices = ({onClose}) => {
  return (
    <div>
        {/* Header with Back Button */}
              <div  className="flex  p-4 items-center space-x-2 mb-4">
                <AiOutlineArrowLeft
                  className=" text-2xl cursor-pointer"
                  onClick={onClose}
                />
                <h2 className="text-2xl font-semibold ">Add Services</h2>
              </div>
      
    </div>
  )
}

export default AddServices
