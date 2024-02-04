import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import DataFetcher from './DataFetcher';

export default function InputForm(props: { target: string }): JSX.Element {
    const [text, setText] = useState("");

    const form = useForm({
        initialValues: {
            text: '',
        }
    });

    if (props.target == "eo") return (
        <Box maw={340}>
            <form onSubmit={form.onSubmit((values) => setText(values.text))}>
                <TextInput
                    withAsterisk
                    placeholder="日本語を入力..."
                    {...form.getInputProps('text')}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">翻訳</Button>
                </Group>
            </form>
            {text ? <DataFetcher query={text} target={props.target}></DataFetcher> : ""}
        </Box>
    );

    if (props.target == "ja") return (
        <Box maw={340}>
            <form onSubmit={form.onSubmit((values) => setText(values.text))}>
                <TextInput
                    withAsterisk
                    placeholder="宇宙語を入力..."
                    styles={{ input: { textTransform: "uppercase" } }}
                    {...form.getInputProps('text')}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">翻訳</Button>
                </Group>
            </form>
            {text ? <DataFetcher query={text} target={props.target}></DataFetcher> : ""}
        </Box>
    );

    return (<></>);
}