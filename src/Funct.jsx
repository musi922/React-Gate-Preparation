import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click Me</button>;
}

export default function ParentComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Memoize the handleClick function
    const handleClick = useCallback(() => {
        console.log('Button clicked');
    }, []); // No dependencies, so handleClick never changes

    // Another function that changes based on `text`
    const handleChangeText = useCallback(() => {
        console.log('Text changed');
    }, [text]); // `handleChangeText` changes when `text` changes

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <ChildComponent onClick={handleClick} />
        </>
    );
}
