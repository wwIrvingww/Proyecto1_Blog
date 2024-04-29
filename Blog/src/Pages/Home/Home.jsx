import './home.css'
import Header from '../../components/Header/Header'
import React, { Suspense, lazy } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Skeleton from './Skeleton'

const Posts = lazy(() => import('../../components/Posts/Posts'))

export default function Home ({ navigate }) {
  return (
    <>
        <Header/>
        <div className="home">
            <Suspense fallback={<Skeleton />}>
                <Posts navigate={navigate} />
            </Suspense>
            <Sidebar />
        </div>
     </>
  )
}
