import React from 'react';
import {useErraticCascade} from '../api/api';
import Loader from '../components/Loader';
import Error from '../components/Error';

const ErraticCascadeGet = () => {

    const {data, error} = useErraticCascade();

    if (error) {
        return <Error message={error.message} />
    }
    if (!data) {
        return <Loader/>
    }
    return <span>Cascade loaded id: {data}</span>
}

export const ErraticCascadedDemo = () => {

    return <>
        <h1>Error Demo</h1>
        <p>This loads cascaded backend calls.</p>
        <ErraticCascadeGet/>
    </>;

}