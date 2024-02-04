import SaveButton from "./SaveButton"
import { useRef } from "react"

type Props = {
    text: string
}

export default function UchugoText(props: Props): JSX.Element {
    const uchugoTextRef = useRef(null)

    return (
        <div>
            <h1 ref={uchugoTextRef}>{props.text.toUpperCase()}</h1>
            <SaveButton uchugoText={uchugoTextRef} />
        </div>
    )
}