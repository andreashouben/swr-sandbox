import useSWR, {Fetcher} from 'swr';

const fetcher: Fetcher<string> = (args: RequestInfo) => fetch(args).then(res => res.json())

export const useSlowGet = () => {
    return useSWR<string>('/slowget', fetcher)
}

export const useErrorGet = () => {
    return useSWR('/errorget', fetcher, {shouldRetryOnError: false});
}

export const useCascade = () => {
    const {data: id1} = useSWR(() => `cascade/1`, fetcher)
    const {data: id2} = useSWR(() => `cascade/${id1}`, fetcher)
    return useSWR(() => `cascade/${id2}`, fetcher)
}