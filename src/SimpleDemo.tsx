import React from 'react';
import useSWR, {Fetcher} from 'swr';
import {Spinner} from 'react-bootstrap';

const fetcher: Fetcher<string> = (args: RequestInfo) => fetch(args).then(res => res.json())

const useSlowGet = () =>{
    return useSWR<string>('/slowget', fetcher)
}

const SlowGet = () => {
    const {data, mutate} = useSlowGet()
    if (!data) {
        return <i> <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
        /> Loading for a sec...</i>
    }
    return <button onClick={() =>{  mutate()}}>{data}. Click to reload</button>
}

export const SimpleDemo = () => {

    return <>
        <h1>Simple Demo</h1>
        <h5>Load an element from backend that takes a while</h5>
        <SlowGet/>
    </>;
}