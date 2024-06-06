import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitems from './Albumitems'
import SongItems from './SongItems'

const DisplayHome = () => {
  return (
    <>
        <Navbar/>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured charts</h1>
            <div className='flex overflow-auto'>
            {albumsData.map((items,index)=>(<Albumitems key={index} id={items.id} name={items.name} image={items.image} desc={items.desc}/>))}
            </div>
          
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's best hits</h1>
            <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>
          
        </div>
    </>
  )
}

export default DisplayHome
