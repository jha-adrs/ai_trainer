import React from 'react';
import { NavbarLanding } from './_components/navbar';

interface LandingProps {

}

const Landing = ({ }: LandingProps) => {
    return (
        <div className='flex flex-col items-center p-4 min-h-screen'>
            <NavbarLanding/>
        </div>
    )
}

export default Landing;