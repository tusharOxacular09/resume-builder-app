import React, { useContext } from 'react'
import UserContext from '../ContextAPI'

const ResumeOutput = () => {
  const [image, setImage] = useContext(UserContext)
  const [fullName, setFullNmae] = useContext(UserContext)
  const [headLine, setHeadLine] = useContext(UserContext)
  const [email, setEmail] = useContext(UserContext)
  const [phone, setPhone] = useContext(UserContext)
  const [website, setWebsite] = useContext(UserContext)
  const [summery, setSummery] = useContext(UserContext)
  const [dob, setDob] = useContext(UserContext)
  return (
    <div>
      <img src={image} alt="" className='w-32 h-32 border rounded-full border-sky-500'/>
      <p>name {fullName}</p>
      <p>1. {headLine}</p>
      <p>2. {email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{summery}</p>
      <p>{dob}</p>
    </div>
  )
}

export default ResumeOutput
