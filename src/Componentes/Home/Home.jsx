import React, {useContext } from 'react';
import { Context } from '../Context/Context';

function Home() {
    const {recetas} = useContext(Context)

    console.log(recetas)
  return (
    <div>Home</div>
  )
}

export default Home