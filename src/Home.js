import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ContentPage from "./componente/ContentPage";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <ContentPage />
        </div>
    )
}

