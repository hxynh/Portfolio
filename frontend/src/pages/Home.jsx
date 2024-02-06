import React from 'react'
import Introduction from '../components/Introduction'
import classes from './styles/Home.module.css';
import ProjectSection from '../layout/ProjectSection'
import { useNavigation } from "react-router-dom";
import LoadingSpinner from '../components/LoadingSpinner';
import TopNavBar from '../components/TopNavBar';
import { useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';

export default function Home() {
    const navigation = useNavigation();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
    });
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  

  return (
    <>
    <div className={classes.main} ref={ref}>
        <div className={classes.gridHeader}>
          <TopNavBar />
        </div>
        <Introduction scrollYProgress={scrollYProgress}/>

        <motion.div style={{y: backgroundY}}className={classes.fullImg} />  
        <div className={classes.mountain}/>
    </div>

        {navigation.state === 'loading' && <LoadingSpinner />}

        {navigation.state !== 'loading' &&<ProjectSection />}
    </>
  )
}
