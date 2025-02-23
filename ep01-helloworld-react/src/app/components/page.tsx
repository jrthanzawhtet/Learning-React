"use client"; // ✅ Fix: Add this at the top

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Region } from "../model/client/dto/region";

export default function Page() {
    const [regions, setRegions] = useState<Region[]>([]);

    useEffect(() => {
        async function fetchRegions() {
            try {
                const response = await axios.get<Region[]>('/api/regions'); // Adjust API endpoint
                setRegions(response.data);
            } catch (error) {
                console.error("Error fetching regions:", error);
            }
        }

        fetchRegions();
    }, []);

    return (
        <div>
            <h1>Regions of Myanmar</h1>
            <ul>
                {regions.map(region => (
                    <li key={region.id}>
                        <strong>{region.name}</strong> - {region.burmeseName} (Capital: {region.capital})
                    </li>
                ))}
            </ul>
        </div>
    );
}
