import React, { useState, useEffect, createContext } from 'react';

interface ICounter {
    increment: () => void;
    decrement: () => void;
    count: number;
};

export const CounterContext = createContext<ICounter>({
    increment: () => {},
    decrement: () => {},
    count: 0,
});

const getInitialState = () => {
    const value = localStorage.getItem("value");
    return value ? JSON.parse(value) : 0;
};

export function CounterProvider({ children }: any){
    const [count, setCount] = useState<number>(getInitialState);

    useEffect(() => {
        localStorage.setItem("value", JSON.stringify(count));
    }, [count]);

    const increment = () => {
        setCount((previousCounter) => previousCounter + 1);
    };

    const decrement = () => {
        setCount((previousCounter) => previousCounter - 1);
    };

    return (
        <CounterContext.Provider
            value={{
                count,
                increment,
                decrement
            }}
        >
            {children}
        </CounterContext.Provider>
    );
}

export function useCounter() {
    return React.useContext(CounterContext);
}
