import Image from "next/image";
import MotionTransition from "./transition";

const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatar-1.png" width={400} height={400} alt="avatar" className="w-full h-full"/>

        </MotionTransition>
     );
}
 
export default Avatar;