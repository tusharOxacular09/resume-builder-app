import React, { useContext } from 'react'
import UserContext from '../ContextAPI'

const ResumeOutput = ({personalDetails}) => {
  const [image, setImage] = useContext(UserContext)
  
  return (
    <div>
      <img src={image || "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"} alt="" className='w-32 h-32 border rounded-full'/>
      <p>{personalDetails.fullName}</p>
      <p>{personalDetails.headLine}</p>
      <p>{personalDetails["email"]}</p>
      <p>{personalDetails.phone}</p>
      <p>{personalDetails.website}</p>
      <p>{personalDetails.summery}</p>
      <p>{personalDetails.dob}</p>
    </div>
  )
}

export default ResumeOutput
