import React from 'react'
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from './Data';


function Products() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
        </div>
    )
}

export default Products
