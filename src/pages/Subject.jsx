import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../redux/slices/pageTitleSlice';
import Header from '../components/layout/Header/Header';

const Subject = () => {

      const dispatch = useDispatch()
    useEffect(() => {
    dispatch(setPageTitle("Add Subject"));
  }, [dispatch]);

  return (
    <div>
      <Header />
    </div>
  )
}

export default Subject