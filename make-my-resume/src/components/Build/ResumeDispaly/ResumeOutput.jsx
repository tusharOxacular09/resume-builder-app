import React, { useContext } from 'react'
import UserContext from '../ContextAPI'

const ResumeOutput = ({personalDetails, userLocation, workExpList, skills, educationList}) => {
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
      <div className='m-2 border border-blue-500 rounded w-1/3'>
          <p>{userLocation.address}</p>
          <p>{userLocation.city}</p>
          <p>{userLocation.region}</p>
          <p>{userLocation.postal_code}</p>
          <p>{userLocation.country}</p>
      </div>


      <p className='text-2xl font-semibold mb-1'>Work Experience</p>
      <div className='w-full flex flex-col border-t mb-2'>
          {
            workExpList.map((experience, index) => {
               return(
                  <div key={index} className='flex flex-col'>
                     <p className='text-xl font-semibold mb-1'>{experience.company}</p>
                     <p className='text-lg font-medium text-gray-400 mb-1'>{experience.position}</p>
                     <p className='text-sm mb-1'>{experience.job_summery}</p>
                   </div>
               )
            })
          }
      </div>
      <p className='text-2xl font-semibold mb-1'>Skills</p>
      <div className='w-full flex flex-col border-t mb-2'>
          {
            skills.map((skill, index) => {
               return(
                  <div key={index} className='flex flex-col'>
                     <p>{skill}</p>
                  </div>
               )
            })
          }
      </div>
      <p className='text-2xl font-semibold mb-1'>Education</p>
      <div className='w-full flex flex-col border-t mb-2'>
          {
            educationList.map((education, index) => {
                return(
                  <div key={index} className=''>
                    <p className='text-lg font-bold'>{education.institution}</p>
                    <h5>{education.degree}</h5>
                    <p>{education.area_of_study}</p>
                    <p>Grade: {education.grade}</p>
                    <p>{`${education.start_date} to ${education.end_date}`}</p>
                    <p>{education.summery}</p>

                  </div>
                )
            })
          }
      </div>
    </div>
  )
}

export default ResumeOutput
