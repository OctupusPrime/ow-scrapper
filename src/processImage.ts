import sharp from "sharp";
import type { Team } from "./manifestLoader.js";

export const convertImageToNegative = async () => {
  const output = await sharp(
    "/Users/mihailsokil/Desktop/ow2-scraper/assets/test.png"
  )
    .greyscale()
    // .linear(10, 0)
    .negate({ alpha: false })
    .toFile("/Users/mihailsokil/Desktop/ow2-scraper/assets/test-negative.png");
};

export const processTeamImage = async (team: Team) => {
  const gameImageBuffer = await sharp(
    "/Users/mihailsokil/Desktop/ow2-scraper/assets/test2.png"
  )
    .greyscale()
    .negate({ alpha: false })
    .toBuffer();

  const playerListImagetBuffer = await sharp(gameImageBuffer)
    .extract(team["player-list"])
    .linear(1, 0)
    .toFile(
      "/Users/mihailsokil/Desktop/ow2-scraper/assets-output/test-team.png"
    );

  // const statsImageBuffer = await sharp(gameImageBuffer)
  //   .extract(team.stats)
  //   .linear(1.5, 0)
  //   .toBuffer();

  // await sharp({
  //   create: {
  //     width: team["player-list"].width + team.stats.width,
  //     height: team["player-list"].height,
  //     channels: 4,
  //     background: { r: 0, g: 0, b: 0, alpha: 0 },
  //   },
  // })
  //   .composite([
  //     { input: playerListImagetBuffer, gravity: "west" },
  //     { input: statsImageBuffer, gravity: "east" },
  //   ])
  //   .toFile(
  //     "/Users/mihailsokil/Desktop/ow2-scraper/assets-output/test-team.png"
  //   );
};
