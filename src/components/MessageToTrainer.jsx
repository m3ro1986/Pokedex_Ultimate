import React, { useEffect, useState } from 'react';

const MessageToTrainer = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMessage('Hello trainer, give your name to start!!!'.slice(0, message.length + 1))
        }, 50)

        return () => clearTimeout(timeout)
    }, [message]);

    return (
        <p>
            { message }
        </p>
    );
};

export default MessageToTrainer;