import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import Image from 'next/image'; // Import Image from next/image for optimized images

const Banner = () => {
    const typewriterRef = useRef(null);

    const roles = [
        'Graduating CS student',
        'Unity Developer',
        'Full Stack Developer',
        'Junior Programmer',
    ];

    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div>
                            <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Welcome to my portfolio!</h1>
                            <div className="py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                <span>
                                    {"<"}
                                    <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                    {">"}{' '}
                                    <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                                        I am {' '}
                                        <span className="inline-block" ref={typewriterRef}>
                                            <Typewriter
                                                options={{
                                                    strings: roles.map(role =>
                                                        `a ${role}`
                                                    ),
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                    </span>{' '}
                                    {"</"}
                                    <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                    {">"}{' '}
                                </span>
                            </div>
                        </div>
                        <div className="w-48 h-52 relative hidden md:block">
                            <Image src="/images/Wave.gif" alt="emoji" fill style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
};

export default Banner;
