"use client"
import AvatarServices from "@/components/avatarServices";
import CircleImage from "@/components/circleImage";
import CoverParticles from "@/components/coverParticles";
import SliderServices from "@/components/sliderServices";
import TransitionPage from "@/components/transitionPage";
import Link from "next/link";

const Services = () => {
    return ( 
       <>
       <CoverParticles />
        <TransitionPage />
        <CircleImage />
        <AvatarServices />
        <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
            <div className="max-w-[450px] mt-20 md:mt-0">
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    Mis{' '}
                    <span className="font-bold text-secondary">
                        servicios.
                    </span>
                </h1>
                <p className="mb-3 text-xl text-gray-300">
                    Ofrezco servicios de desarrollo web Fullstack enfocados al frontend, especializados en la creacion de sitios web y aplicaciones atractivas y funcionales. Utilizando tecnologias como HTML, CSS, Javascript y React, con interfaces intuitivas y responsivas que reflejan la identidad de marca de mis clientes.
                </p>
                <Link href="https://wa.me/573003550436" target="_blank" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</Link>
            </div>
            <div>
                <SliderServices />
            </div>
        </div>
       </>
     );
}
 
export default Services;