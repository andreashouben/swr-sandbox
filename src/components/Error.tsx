import React from 'react';

type ErrorProps = {
    message?: string
}

const Error = ({message}: ErrorProps) => <span>There was an error {message && ": " + message}</span>

export default Error