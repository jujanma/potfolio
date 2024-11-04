"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduction = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority alt="Profile pict" width="800" height="800"/>

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo, <br />
                        <TypeAnimation sequence={[
                            "puedes programarlo.",
                            1000,
                            "puedes optimizarlo.",
                            1000,
                            "puedes hacerlo real.",
                            1000,
                            "puedes automatizarlo.",
                            1000,
                        ]} 
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-base md:mx-0 md:mb-8 md:text-xl">
                    Como desarrollador frontend, me especializo en crear interfaces de usuario modernas, interactivas y altamente optimizadas. Con experiencia en  HTML, CSS, JavaScript y un enfoque en React.js, transformo ideas en experiencias digitales intuitivas y atractivas, que mejoran la conversión y el engagement.
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-yellow-300/50">
                            Ver proyectos
                        </Link>
                        <Link href="https://wa.me/573003550436" target="_blank" className="px-3 py-2 text-secondary border-secondary transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Contactame
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Introduction;