import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion"

interface Props {
    title: string;
    imageUrl: string;
    color: string;
    technologies: string;
    outUrl: string;
    style: string;
}

export const ProjectFeatureCard: React.FC<Props> = ({ title, imageUrl, color, technologies, outUrl, style }) => {

    const go = () => {
        if (outUrl && outUrl !== "") {
            window.open(outUrl, "_blank")
        }
        else {
            // toast("Sorry, this website isn't live yet, I'll update this page as soon as it is.")
        }
    }

    return (
        <a className="w-full" target="_blank" onClick={() => {go()}}>
            <motion.div className="overflow-hidden cursor-pointer m-auto w-full p-10 rounded-lg h-full shadow-offset-black-lg" 
            style={{ backgroundColor: color }} 
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.2 }}

                whileTap={{ scale: 0.958 }} >
                <img alt="blog photo" src={imageUrl} className="max-h-96 object-cover self-center mx-auto" />
                <div className="w-full pt-14" style={{color: style === 'dark' ? '#000' : '#fff'}}>
                    <p className="text-md font-medium ">
                        Featured Project
                    </p>
                    <p className=" text-4xl font-bold mb-2 font-futura-pt-bold">
                        {title}
                    </p>
                    <p className=" text-sm font-sourcecode mt-5">
                        {technologies}
                    </p>
                </div>
            </motion.div>
        </a>
    )
}
