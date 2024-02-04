import { Notification } from '@mantine/core';
import UchugoText from './UchugoText';

type Response = {
    code: number,
    text: string
}

type Props = {
    data: string
}

export default function ResultArea(props: Props): JSX.Element {
    let json: Response = JSON.parse(props.data)

    if (json && json.code === 200) {
        return (
            <UchugoText text={json.text} />
        )
    } else {
        return <Notification color="red" title="翻訳に失敗しました。"></Notification>
    }
}