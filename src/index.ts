import { GlobalKeyboardListener } from "node-global-key-listener";
import { createWorker } from "tesseract.js";

import { processTeamImage } from "./processImage.js";
import manifest from "./manifestLoader.js";

const v = new GlobalKeyboardListener();

v.addListener(function (e, down) {
  if (e.state == "DOWN" && e.name == "F") {
    console.log("Processing image...");

    const team = manifest["team-1"];

    processTeamImage(team);
  }

  if (e.state == "DOWN" && e.name == "G") {
    (async () => {
      const worker = await createWorker("ow2menu", 1, {
        langPath: "/Users/mihailsokil/Desktop/ow2-scraper/src/tessdata",
        gzip: false,
      });
      const ret = await worker.recognize(
        "/Users/mihailsokil/Desktop/ow2-scraper/assets-output/test-team.png"
      );
      console.log(ret.data.text);
      await worker.terminate();
    })();
  }
});
