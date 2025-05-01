"use client";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from 'react';

export default function CompaniesSwiper() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            dragFree: true,
            watchDrag:false,
            duration: 7000,
            slidesToScroll: 1,
            containScroll: 'trimSnaps',
        },
        [Autoplay({ delay: 0, stopOnInteraction: false })]
    );
    useEffect(() => {
        if (emblaApi) emblaApi.reInit();
    }, [emblaApi]);

    return (
        <div className=' w-full bg-white text-black relative'>
            <div className='w-full h-full  absolute z-10 bg-gradient-to-l from-white/100 via-white/0 to-white/100'> 
            </div>
            <div ref={emblaRef} style={{ overflow: 'hidden' }}>
                <div className='notr flex'>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]' >
                        <div className='flex py-10 justify-center items-center'>
                            Slide 1
                        </div>
                    </div>
                    <div className=' notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 2
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 3
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 4
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 5
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 6
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 7
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 8
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 9
                        </div>
                    </div>
                    <div className='notr flex-[0_0_25%] lg:flex-[0_0_20%]'>
                        <div className='flex py-10 justify-center items-center'>
                            Slide 10
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}