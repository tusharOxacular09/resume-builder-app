import React from 'react'

const Home = () => {
  return (
    <div className='lg:flex'>
        <div className='lg:w-1/2 h-full mt-10 ml-20 lg:mt-24'>
            <h1 className='text-4xl lg:text-6xl font-bold leding-tight lg:leading-snug'>Get <span className='text-amber-400'>Hired!!</span> <br/> By building your resume <br/> for Free...</h1>
            <p>Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.</p>
            <button>Get Started</button>
        </div>
       <img className="rounded-lg" src="./images/home_img.jpg" alt="Iimage Here" />
    </div>
  )
}

export default Home
