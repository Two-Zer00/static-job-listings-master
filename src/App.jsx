import { useEffect, useState } from 'react'
import header from "./resources/bg-header-desktop.svg";
import data from "./data.json";
import JobElement from './component/JobElement';
import remove from './resources/icon-remove.svg'
function App() {
  const [filter, setFilter] = useState([])
  const [jobs, setJobs] = useState(data)
  const removeFilter = (value) => {
    // console.log(value,filter);
    let temp = filter.filter((element)=>{return element!=value});
    // console.log(temp);
    setFilter(temp);
  }
  const addFilter = (value) => {
    let temp = filter;
    temp.push(value);
    setFilter([...new Set(temp)])
  }
  useEffect(() => {
    // console.log(filter);
    if (filter.length>0) {
      let temp = data.filter((element) => {
        let tags = [element.level, element.role, ...element.languages, ...element.tools];
        return filter.every(r => tags.includes(r));
      })
      console.log(filter,temp);
      setJobs(temp);
    }
    else {
      setJobs(data)
    }
  }, [filter])
  
  return (
    <div className='flex flex-col font-spartan relative bg-grayish-50 min-h-screen'>
      <header className='bg-cyan-50 relative mb-9'>
        <img src={header} alt="header" className='w-full object-cover object-right' />
        {filter.length>0 && <section className='absolute top-full -translate-y-1/2 w-full h-auto'>
          <div className='bg-white flex items-center shadow-lg rounded w-10/12 mx-auto h-20 px-4 md:px-10'>
            <section className='flex gap-4 items-center w-full md:flex-nowrap flex-wrap h-full py-2 overflow-scroll'>
            {filter.map((element,index) => {
              return (<div key={"filter"+index} className='bg-grayish-100 flex rounded'><span className='text-cyan-50 font-bold px-2 h-fit rounded '>{element}</span> <button onClick={()=>{removeFilter(element)}} className='bg-cyan-50 flex-none rounded-r aspect-square w-6 flex justify-center items-center hover:bg-black'><img src={remove} alt="remove icon" /></button> </div>)
            })}
            </section>
            <section>
              <span className='hover:underline text-cyan-50 capitalize hover:cursor-pointer hover:font-bold' onClick={()=>{setFilter([])}}>clear</span>
            </section>
          </div>
        </section>}
      </header>
      <main className='w-4/5 mx-auto'>
        <section className={`mt-9 mb-5 flex flex-col gap-10 md:gap-6`}>
          {jobs.map((element) => {
            return ( 
              <JobElement key={element.id} job={element} filter={filter} setFilter={setFilter} addFilter={addFilter} />)
          })}
        </section>
      </main>
    </div>
  )
}

export default App
