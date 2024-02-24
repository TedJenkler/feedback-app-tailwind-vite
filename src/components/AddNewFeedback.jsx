import React, { useEffect, useState } from 'react'
import arrowleft from "../assets/arrowleft.png"
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../features/state/stateSlice'

function AddNewFeedback( {setToggleAdd, toggleAdd} ) {
    const [title, setTitle] = useState("")
    const [select, setSelect] = useState("Feature")
    const [detail, setDetail] = useState("")
    const getId = useSelector((state) => state.state.data.productRequests)
    const [id, setId] = useState(getId.length + 1)
    const dispatch = useDispatch()
    console.log(getId.length)
    useEffect(() => {
        setId(getId.length + 1)
    })
  return (
    <main className='absolute min-h-full w-full bg-grey-white2 top-0 left-0 right-0 px-6 pt-10 pb-20'>
    <button onClick={(e) => setToggleAdd(!toggleAdd)} className='flex items-center gap-1 mb-8'>
        <img className='w-1 h-2' src={arrowleft} alt='arrowback' />
        <p className='text-grey text-sm font-bold'>Go Back</p>
    </button>
    <div className='flex flex-col text-black mt-5 py-11 px-6 bg-white rounded-xl'>
        <h1 className='text-lg text-blue font-bold mb-6'>Create New Feedback</h1>
        <h2 className='text-sm text-blue font-bold mb-1'>Feedback Title</h2>
        <p className='text-sm text-grey font-normal mb-4'>Add a short, descriptive headline</p>
        <textarea onChange={(e) => setTitle(e.target.value)} value={title} className='bg-grey-white2 h-12 mb-6'></textarea>
        <h2 className='text-sm text-blue font-bold mb-1'>Category</h2>
        <p className='text-sm text-grey font-normal mb-4'>Choose a category for your feedback</p>
        <select onChange={(e) => {setSelect(e.target.value)}} className='bg-grey-white2 h-12 mb-6'>
            <option value={"Feature"}>Feature</option>
            <option value={"UI"}>UI</option>
            <option value={"UX"}>UX</option>
            <option value={"Enchantment"}>Enchantment</option>
            <option value={"Bug"}>Bug</option>
        </select>
        <h2 className='text-sm text-blue font-bold mb-1'>Feedback Detail</h2>
        <p className='text-sm text-grey font-normal mb-4'>Include any specific comments on what should be improved, added, etc.</p>
        <textarea onChange={(e) => setDetail(e.target.value)} value={detail} className='bg-grey-white2 h-32 mb-10'></textarea>
        <button onClick={(e) => dispatch(add({id: id, title: title, category: select, description: detail}))} className='bg-purple text-white mb-4 py-2 rounded-xl'>Add Feedback</button>
        <button onClick={(e) => setToggleAdd(!toggleAdd)} className='bg-blue text-white py-2 rounded-xl'>Cancel</button>
    </div>
    </main>
  )
}

export default AddNewFeedback