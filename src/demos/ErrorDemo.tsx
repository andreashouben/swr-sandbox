import React from 'react';
import {useErrorGet} from '../api/api';
import Loader from '../components/Loader';

const ErrorGet = () => {
    const {data, error} = useErrorGet();
    if (error){
        return <span>There was an error</span>
    }
    if (!data){
        return <Loader />
    }
    return <span>What the heck? This should never be visible :D</span>
}


export const ErrorDemo = () => {



    return <>
        <h1>Error Demo</h1>
        <p>This loads for a while and returns an error.</p>
        <ErrorGet />
    </>;

}