import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../redux/slices/pageTitleSlice';
import Header from '../components/layout/Header/Header';

const Teacher = () => {
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(setPageTitle("Add Teacher"));
  }, [dispatch]);
  return (
    <div className='w-full'>
      <Header />
      <div></div>
    </div>
  )
}

export default Teacher