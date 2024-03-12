import { CardNames, cardCategory } from "./types";

export default function adaptCount(
  players: number,
  isFast: boolean,
  name: CardNames,
  category: cardCategory,
  count: number
) {
  if (players <= 2) {
    return count;
  }
  const additionalPlayers = players - 2;
  // Special case by case
  if (name === "creation") {
    return count + additionalPlayers;
    // Adding 1 for each additional player
  }
  if (name === "apotheosis") {
    return count + additionalPlayers;
    // Adding 1 for each additional player
  }
  if (name === "observatory") {
    return players;
    // 1 for each player
  }
  if (name === "arcaneMirror") {
    return players % 2 === 0 ? players / 2 : Math.floor(players / 2);
    // 1 for every 2 players
  }
  if (name === "generator") {
    return count + additionalPlayers;
  }
  if (name === "catalyst") {
    return isFast
      ? count + additionalPlayers * 5
      : count + additionalPlayers * 6;
    // Adding 5 for each additional player in fast mode
    // Adding 6 for each additional player in slow mode
  }
  // Group case
  if (category === "glyph") {
    return isFast
      ? count + additionalPlayers * 2
      : additionalPlayers % 2 === 0
      ? count * additionalPlayers
      : count * Math.ceil(additionalPlayers / 2) + 3;
    // Adding 2 for each additional player in fast mode
  }
  if (category === "spell") {
    return isFast
      ? count + additionalPlayers * 2
      : additionalPlayers % 2 === 0
      ? count * (additionalPlayers / 2)
      : count * Math.ceil(additionalPlayers / 2) + 2;
  }
  if (category === "utility") {
    return isFast
      ? count + additionalPlayers * 2
      : additionalPlayers % 2 === 0
      ? count * (additionalPlayers / 2)
      : count * Math.ceil(additionalPlayers / 2) + 2;
  }
  return 0;
}
