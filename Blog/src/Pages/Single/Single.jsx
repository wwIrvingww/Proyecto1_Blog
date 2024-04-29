import React, { Suspense, lazy } from 'react'
import './single.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Skeleton from './Skeleton'

const SinglePost = lazy(() => import('../../components/SinglePost/SinglePost'))

export default function Single ({ postId }) {
  console.log('postid:', postId)

  return (
        <>
            <div className="single">
                <Suspense fallback={<Skeleton />}>
                    <SinglePost postId={postId} />
                </Suspense>
                <Sidebar />
            </div>
        </>
  )
}
