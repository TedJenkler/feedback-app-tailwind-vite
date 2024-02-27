import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sort } from '../features/state/stateSlice'
import { Link } from 'react-router-dom'
import lightbulb from "../assets/lightbulb.png"

function Sort() {
    const [sortBy, setSortBy] = useState("Most Upvotes")
    const state = useSelector((state) => state.state.data.productRequests)
    const dispatch = useDispatch()

    const suggestionCount = state.reduce((acc, currentValue) => {
        if (currentValue.status === "suggestion") {
            return acc + 1;
        }
        return acc;
    }, 0);

    useEffect(() => {
        dispatch(sort(sortBy))
    }, [sortBy])
  return (
    <div className='flex justify-between h-14 items-center text-white px-6 bg-dark-blue text-sm md:mx-10 md:rounded-xl md:h-20 xl:mt-24 xl:mr-40 xl:ml-8 xl:h-16'>
        <div className='flex items-center'>
            <div className='hidden absolute md:flex md:relative md:gap-2 md:items-center xl:mr-10'>
                <img src={lightbulb} alt='lightbulb' />
                <p className='text-lg font-bold text-white xl:whitespace-nowrap lg:mr-10'>{suggestionCount} Suggestions</p>
            </div>
            <div className='hover:opacity-75'>
            <label className='font-normal whitespace-nowrap'>Sort by : </label>
            <select className='bg-dark-blue font-bold w-32 mr-4' onChange={(e) => {setSortBy(e.target.value)}}>
                <option className='hover:text-purple' value="Most Upvotes"> Most Upvotes</option>
                <option className='hover:text-purple' value="Least Upvotes"> Least Upvotes</option>
                <option className='hover:text-purple' value="Most Comments"> Most Comments</option>
                <option className='hover:text-purple' value="Least Comments"> Least Comments</option>
            </select>
            </div>
        </div>
        <Link to="/addfeedback" className='bg-purple rounded-xl px-4 py-2 font-bold whitespace-nowrap hover:bg-hover-purple'>+ Add Feedback</Link>
    </div>
  )
}

export default Sort
