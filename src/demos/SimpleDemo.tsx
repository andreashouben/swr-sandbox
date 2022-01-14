import React from 'react';

import {useSlowGet} from '../api/api';
import Loader from '../components/Loader';

const SlowGet = () => {
    const {data} = useSlowGet()
    if (!data) {
        return <Loader/>
    }
    return <span>{data}</span>
}

export const SimpleDemo = () => {

    return <>
        <h1>Simple Demo</h1>
        <p>Load an element from backend that takes a while</p>
        <SlowGet/>
    </>;
}