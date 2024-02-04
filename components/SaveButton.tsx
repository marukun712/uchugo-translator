import html2canvas from "html2canvas";
import { Button } from '@mantine/core';
import { RefObject } from "react";

export default function SaveButton(props: { uchugoText: RefObject<HTMLElement> }) {
    const saveAsImage = (uri: string) => {
        const downloadLink = document.createElement("a");

        if (typeof downloadLink.download === "string") {
            downloadLink.href = uri;

            downloadLink.download = "uchugo.png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } else {
            window.open(uri);
        }
    }

    const onClickExport = () => {
        if (!props.uchugoText.current) { return; }
        html2canvas(props.uchugoText.current).then(canvas => {
            const targetImgUri = canvas.toDataURL("img/png");
            saveAsImage(targetImgUri);
        });
    }

    return (
        <Button variant="filled" onClick={onClickExport}>テキストを画像として保存</Button>
    )
}