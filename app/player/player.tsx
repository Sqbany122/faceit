import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { PlayerMatches } from "./tabs/matches";
import { PlayerStatistics } from "./tabs/statistics";

type Player = {
  player_id: string;
  nickname: string;
  avatar: string | null;

};

export function PlayerPage() {
  const { id } = useParams<{ id: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [activeTab, setActiveTab] = useState("statistics");


  useEffect(() => {
    const fetchPlayerData = async () => {
      const res = await fetch(`https://open.faceit.com/data/v4/players/${id}`, {
        headers: {
          'Authorization': 'Bearer 17f6af1e-25db-418d-92ce-d14235a41fac',
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPlayer(data);
      } else {
  
        setPlayer(null);
      }
    };

    if (id) {
      fetchPlayerData();
    }
  }, [id]);

  if (!player) {
    return <div>Loading...</div>; 
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "statistics":
        return <PlayerStatistics />;
      case "matches":
        return <PlayerMatches />;
      default:
        return <PlayerStatistics />;
    }
  };

  return (
    <main className="h-screen w-full">
      <div className="playerPage flex flex-col h-screen w-full">
        <div className="headerContent flex flex-row items-center p-5 border-b-2 border-black-500">
          {player.avatar ? (
            <img
              src={player.avatar}
              alt={`${player.nickname} avatar`}
              className="rounded-full w-32 h-32"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-black" />
          )}
          <p className="playerNickname ml-5">{player.nickname}</p>
        </div>

        <div className="playerTabs flex flex-row justify-evenly border-b-2 border-black-500">
          <div
            className={`playerTabItem p-2 text-center cursor-pointer ${
              activeTab === "statistics" ? "underline font-bold" : ""
            }`}
            onClick={() => handleTabClick("statistics")}
          >
            <p className="text-center">STATISTICS</p>
          </div>
          <div
            className={`playerTabItem p-2 text-center cursor-pointer ${
              activeTab === "matches" ? "underline font-bold" : ""
            }`}
            onClick={() => handleTabClick("matches")}
          >
            <p className="text-center">MATCHES</p>
          </div>
          <div
            className={`playerTabItem p-2 text-center cursor-pointer ${
              activeTab === "maps" ? "underline font-bold" : ""
            }`}
            onClick={() => handleTabClick("maps")}
          >
            <p className="text-center">MAPS</p>
          </div>
          <div
            className={`playerTabItem p-2 text-center cursor-pointer ${
              activeTab === "highlights" ? "underline font-bold" : ""
            }`}
            onClick={() => handleTabClick("highlights")}
          >
            <p className="text-center">HIGHLIGHTS</p>
          </div>
        </div>

        <div className="tabContentContainer p-5">
          {renderTabContent()}
        </div>
      </div>
    </main>
  );
}
