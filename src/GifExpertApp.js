import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setcategories] = useState(['Dragon Ball']);

  /*const handleAdd = () => {
    setcategories([...categories, 'HunterXHunter']);
  }*/
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              category={category}
              key={category} />
          ))
        }
      </ol>
    </>
  )
}
