import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home Page" },
        { name: "description", content: "My App" },
    ];
}

export default function Home() {
    return (
        <main>
            <h1>Home Page</h1>
            <p>This is a clean page with random text.</p>
        </main>
    );
}