import useSWR, {Fetcher} from 'swr';

const fetcher: Fetcher<string> = (args: RequestInfo) => fetch(args)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    })

export const useSlowGet = () => {
    return useSWR<string>('/slowget', fetcher, {refreshInterval = 1000})
}

export const useErrorGet = () => {
    return useSWR('/errorget', fetcher, {shouldRetryOnError: false});
}

export const useCascade = () => {
    const {data: id1} = useSWR(() => `cascade/1`, fetcher)
    const {data: id2} = useSWR(() => `cascade/${id1}`, fetcher)

    return useSWR(() => `cascade/${id2}`, fetcher)
}

export const useErraticCascade = () => {
    const {data: id1, error: error1} = useSWR(`erraticcascade/1`, fetcher)
    const {data: id2, error: error2} = useSWR(() => id1 ? `erraticcascade/${id1}` : null, fetcher)
    const response = useSWR(() => id2 ? `erraticcascade/${id2}` : null, fetcher)
    return error1 || error2 ?
        {data: undefined, error: error1 || error2}
        : response;

}
