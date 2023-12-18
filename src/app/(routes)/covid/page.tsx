import NBATeams from "@/components/covid";
import CovidStats from "@/components/covid";

export default function NbaPage() {
  var data;

  fetch("https://www.balldontlie.io/api/v1/teams/")
    .then((response) => response.json())
    .then((json) => (data = json));

  return <>{data.map(team)}</>;
}
