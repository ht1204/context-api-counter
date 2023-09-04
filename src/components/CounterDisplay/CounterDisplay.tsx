import React from 'react';
import { useCounter } from '../../context/CounterProvider';
import { Form } from 'react-bootstrap';

function CounterDisplay() {
    const { count } = useCounter();

    return (
        <div >
            <Form.Control type="text" readOnly value={count} />
        </div>
    );
}

export default CounterDisplay;
