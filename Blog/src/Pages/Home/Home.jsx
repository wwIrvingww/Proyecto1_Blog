import './home.css'
import Header from '../../components/Header/Header'
import React, { Suspense, lazy } from 'react'
import PropTypes from 'prop-types' // Importa PropTypes
import Sidebar from '../../components/Sidebar/Sidebar'
import Skeleton from './Skeleton'

const Posts = lazy(() => import('../../components/Posts/Posts'))

// Define los PropTypes para el componente Home
const Home = ({ navigate }) => {
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

Home.propTypes = {
  navigate: PropTypes.func.isRequired
}
export default Home
