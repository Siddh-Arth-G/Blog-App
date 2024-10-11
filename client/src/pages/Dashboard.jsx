import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSideBar from '../components/DashSideBar';
import DashProfile from '../components/DashProfile'

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState(' ');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab');
    if(tabFormUrl){
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      <div className='min-w-56'>
        {/* SideBar */}
        <DashSideBar />
      </div>
      {/* Profile */}
      {tab === 'profile' && <DashProfile />}
    </div>
  )
}
