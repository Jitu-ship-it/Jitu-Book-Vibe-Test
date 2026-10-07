import React, { createContext,useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import { getAllReadListFromLocalDB,addReadListToLocalDB } from '../utils/localDB';
 

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoreBooks] = useState(()=>getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState([]);

    // useEffect(() => {
    //    const getReadListFromLocalDB = getAllReadListFromLocalDB();
    //    console.log(getReadListFromLocalDB,"getReadListFromLocalDB");
    //    setReadList(getReadListFromLocalDB);  
    // }, [])       

    const handleMarkAsRead = (CurrentBook) => {

        addReadListToLocalDB(CurrentBook); 
        const isExistBook = storedBooks.find(
            (book) => book.bookId === CurrentBook.bookId
        );

        if (isExistBook) {
            toast.error("The book is already exist");
        } else {
            setStoreBooks([...storedBooks, CurrentBook]);
            toast.success(`${CurrentBook.bookName} is added to read list`);
        }

        console.log(CurrentBook, "book");
    };

    const handleWishList = (currentBook) => {
        const isExitInReadList = storedBooks.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExitInReadList) {
            toast.error("This book is already in read list");
            return;
        }

        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistBook) {
            toast.error("The book is already exist");
        } else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`);
        }

        console.log(currentBook, "book");
    };

    const data = {
        storedBooks,
        setStoreBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;