import useSWR from 'swr'
import { Loader } from '@mantine/core';
import { Notification } from '@mantine/core';
import ResultArea from './ResultArea';

type Props = {
    query: string
    target: string
}

export default function DataFetcher(props: Props) {
    const fetcher = (url: string): Promise<string> => fetch(url).then(res => res.text());

    const { data, error, isLoading } = useSWR(`https://script.google.com/macros/s/AKfycbzNAkCpsCa7Iybm4HOds4bUeHS02zRW8xOoZZ_aUZiYVUQoKuGtDNZxUSio9CZ4FngDYw/exec?text=${props.query}&to=${props.target}`, fetcher)

    if (error) return <Notification color="red" title="APIとの通信に失敗しました。"></Notification>
    if (isLoading) return <Loader color="blue" />
    if (data) return (<ResultArea data={data} />)
}