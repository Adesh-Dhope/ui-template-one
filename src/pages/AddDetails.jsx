import React, { useEffect } from 'react'
import { setPageTitle } from '../redux/slices/pageTitleSlice';
import { useDispatch } from 'react-redux';
import Header from '../components/layout/Header/Header';

const AddDetails = () => {

         const dispatch = useDispatch()
    useEffect(() => {
    dispatch(setPageTitle("Add Details"));
  }, [dispatch]);

  return (
    <div>
      <Header />
    </div>
  )
}

export default AddDetails