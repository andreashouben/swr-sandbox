import React from 'react';
import {useCascade, useErrorGet} from '../api/api';
import Loader from '../components/Loader';

const CascadeGet = () => {

    const {data} = useCascade();

    if (!data) {
        return <Loader/>
    }
    return <span>Cascade loaded id: {data}</span>
}

export const CascadedDemo = () => {

    return <>
        <h1>Error Demo</h1>
        <p>This loads cascaded backend calls.</p>
        <CascadeGet/>
    </>;

}