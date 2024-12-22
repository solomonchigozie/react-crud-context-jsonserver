import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({children}) {
    const [count, setCount ] =  useState(5)

    const valueToShare = {
        // count: count,
        count,
        incrementCount : () => {
            setCount(count +1);
        },
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider} //named export
export default BooksContext; //default export
