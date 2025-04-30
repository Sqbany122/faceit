import { Form, Link  } from "react-router";
import { useState, useEffect } from "react";

type Player = {
    player_id: string;
    nickname: string;
    avatar: string | null;
};

export async function test(name: string) {
    const res = await fetch('https://open.faceit.com/data/v4/search/players?limit=5&game=cs2&nickname=' + name, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer 17f6af1e-25db-418d-92ce-d14235a41fac',
            'Content-Type': 'application/json',
        },
    });
    
    if (!res.ok) {
        return [];
    }

    const data = await res.json();
    console.log(data.items)
    return data.items || [];
}

export function SearchPage() {
    const [result, setResult] = useState<Player[]>([]);
    const [searched, setSearched] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleSearch = async (name: string) => {
        const players = await test(name);
        setResult(players);
        setSearched(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.trim() !== "") {
        handleSearch(value.trim());
        } else {
        setResult([]);
        setSearched(false);
        }
    };

    return (
        <main className="pageContent flex items-center justify-center flex-col h-screen w-full pb-4">
            <div className="flex flex-col items-center text-center">
                <Form method="get">
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        className="searchBar p-2 w-100 border rounded"
                    />
                </Form>
            </div>
           
            {(searched || result.length > 0) && (
                <div className="border mt-5 p-4 w-full max-w-md flex flex-col gap-4">
                    {result.length > 0 ? (
                        result.map((player) => (
                        <Link
                            key={player.player_id}
                            to={`/player/${player.player_id}`}
                            className="flex items-center gap-4 hover:bg-gray-100 rounded p-2 transition"
                        >
                            {player.avatar ? (
                              <img
                                src={player.avatar}
                                alt="avatar"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-black" />
                            )}
                            <div className="text-lg">{player.nickname}</div>
                        </Link>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">No players found.</div>
                    )}
                </div>
            )}
        </main>
    )
}
