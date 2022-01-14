import useSWR, {Fetcher} from 'swr';

const fetcher: Fetcher<string> = (args: RequestInfo) => fetch(args).then(res => res.json())

export const useSlowGet = () => {
    return useSWR<string>('/slowget', fetcher)
}

export const useErrorGet = () => {
    return useSWR('/errorget', fetcher, {shouldRetryOnError: false});
}