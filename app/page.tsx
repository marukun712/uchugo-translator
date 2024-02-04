"use client"
import { AppShell, Burger, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import InputForm from '@/components/InputForm'
import { IconHome2, IconBrandGithub } from '@tabler/icons-react';

export default function Home() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <NavLink
                    label="HOME"
                    href='/'
                    leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                />
                <NavLink
                    label="GITHUB"
                    href='https://github.com/marukun712/uchugo-translator'
                    leftSection={<IconBrandGithub size="1rem" stroke={1.5} />}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                <h1>宇宙語翻訳機</h1>
                <p>BONAN! 日本語の文章を「星屑テレパス」に登場する宇宙語に翻訳することができます。</p>

                <h2>日本語から宇宙語へ翻訳</h2>
                <InputForm target='eo' />
                <h2>宇宙語から日本語へ翻訳</h2>
                <InputForm target='ja' />
            </AppShell.Main>

        </AppShell>
    );
}
