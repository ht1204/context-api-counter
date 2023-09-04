import React from 'react';
import { useCounter } from '../../context/CounterProvider';
import { Button } from 'react-bootstrap';

function CounterButtons() {
    const { increment, decrement } = useCounter();

    return (
        <div style={{ marginTop: '1rem' }}>
            <Button variant="success" onClick={increment}>
                Increment
            </Button>{' '}
            <Button variant="danger" onClick={decrement}>
                Decrement
            </Button>
        </div>
    );
}

export default CounterButtons;
