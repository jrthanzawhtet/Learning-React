"use client";
import { Button, Card } from "@mui/material";
import { useState } from "react";
import PageTitle from "../component/page-title";

export default function SimpleState() {
    const [count, setCount] = useState<number>(0);

    const countDown = () => {
        setCount(prevCount => prevCount - 1);
    };

    const countUp = () => setCount(count + 1);

    return (
        <>
            <PageTitle title="Simple State" />

            <Card variant="outlined">
                <section className="p-8 flex items-center">
                    <Button variant="outlined" onClick={countDown}>Count Down</Button>
                    <h1>{count}</h1>

                    <Button variant="outlined" onClick={countUp}>Count Up</Button>
                    <h1>{count}</h1>
                </section>
            </Card>
        </>
    );
}
