import React from 'react'

export default function JobElement({ job,filter,setFilter,addFilter }) {
    let tags = [job.role, job.level, ...job.languages, ...job.tools];
    // const addToFilter = (value) => {

    //     ad
    //     let temp = filter;
    //     temp.push(value);
    //     setFilter(temp)
    // }
    return (
        <div className={`flex flex-col bg-white md:flex-row gap-4 md:gap-5 shadow-lg rounded relative px-5 py-8 box-border border-l-4 ${job.featured ?'border-cyan-50':'border-transparent' }`}>
            <section className='flex-none bottom-full translate-y-1/2 absolute md:static md:translate-y-0'>
                <img src={job.logo} alt="logo" className='aspect-square w-10 md:w-auto md:h-full' />
            </section>
            <section className='flex flex-col flex-none border-b md:border-b-0 pb-4 pt-2 md:pb-0 md:pt-0 gap-1 md:gap-0 justify-between'>
                <div className='flex gap-4 font-bold'>
                    <h3 className='text-cyan-50 text-lg'>{job.company}</h3>
                    <div className='flex items-center gap-2'>
                        {job.new && <span className='bg-cyan-50  text-white px-2 rounded-full uppercase text-sm'>new!</span>}
                        {job.featured && <span className='bg-black text-white px-2 rounded-full uppercase text-sm'>featured</span>}
                    </div>
                </div>
                <a href='#' className='font-bold md:text-xl hover:text-cyan-50'>{job.position}</a>
                <div className='flex'>
                    <ul className='list-disc list-inside text-md text-grayish-200 flex gap-2'>
                        <li className='list-none'>{job.postedAt}</li>
                        <li>{job.contract}</li>
                        <li>{ job.location}</li>
                    </ul>
                </div>
            </section>
            <section className='w-full flex gap-3 items-center md:justify-end flex-wrap md:flex-nowrap'>
                {tags.map((element,index) => {
                    return (
                        <button key={"tags"+index} onClick={() => {addFilter(element)}}  className='bg-grayish-100 text-cyan-50 h-fit rounded px-2 py-1 font-bold hover:text-white hover:bg-cyan-50'>{element}</button>
                    )
                })}
            </section>
        </div>
    )
}