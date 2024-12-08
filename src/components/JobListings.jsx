import React from 'react'
// import jobs from '../jobs.json'
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import { FaAutoprefixer } from 'react-icons/fa'
import Spinner from './Spinner';



const JobListings = ({isHome = false}) => {
    const url = isHome?"/api/jobs?_limit=3":"/api/jobs"
    const [jobs,setJobs] = useState([])
    const [loading,setLoading] = useState(true)
    const jobListings = isHome? jobs.slice(0,3): jobs
    useEffect(()=>{
        const getJobs = async() =>{
            try{
                const data = await fetch(url);
                const jobss = await data.json()
                setJobs(jobss)
            }
            catch(error){
                console.log('Error Fetching Data',error)
            }
            finally{
                setLoading(false);
            }
        }
        getJobs()
    },[])

  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        
        
        {loading ? <Spinner loading={loading}/> :
            (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job)=>(
                <JobListing key ={job.id} job={job}/> ))
            }
            </div>)
        } 
                
      </div>
    </section>
    </div>
  )
}

export default JobListings
