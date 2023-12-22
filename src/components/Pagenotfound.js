import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function PageNotfound() {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../videos/error.json'),
        }) 
    }, []);


    return (

        <>
            <section className=" ">
         
                <div  className="container w-full h-screen overflow-hidden" ref={container} >

                </div>
                <button>BACK</button>
             
            </section>

        </>
    );
}
export default PageNotfound;