import React, { useContext } from 'react';
import Banner from '../../Components/homepage/Banner';
import AllBooks from '../../Components/homepage/AllBooks';
import { BookContext } from '../../Context/BookContext';

const Homepage = () => {
      const bookContext = useContext(BookContext)
        console.log(bookContext,"bookContext");
    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default Homepage;