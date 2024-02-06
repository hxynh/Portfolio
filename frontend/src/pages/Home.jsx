import React from 'react'
import Introduction from '../components/Introduction'
import ProjectSection from '../layout/ProjectSection'
import { useNavigation } from "react-router-dom";
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
    const navigation = useNavigation();

  return (
    <>
        <Introduction />
        {navigation.state === 'loading' && <LoadingSpinner />}
        {navigation.state !== 'loading' &&<ProjectSection />}
    </>
  )
}
