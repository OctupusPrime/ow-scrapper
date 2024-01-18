import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type Position = z.infer<typeof positionSchema>;
export type Team = z.infer<typeof teamSchema>;

const positionSchema = z.object({
  left: z.number(),
  top: z.number(),
  width: z.number(),
  height: z.number(),
});

const teamSchema = z.object({
  "player-list": positionSchema,
  stats: positionSchema,
});

class ManifestLoader {
  private schema = z.object({
    "map-name": positionSchema,
    "team-1": teamSchema,
    "team-2": teamSchema,
  });

  loadManifest(filePath: string) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const manifest = JSON.parse(fileContent);

    const validatedManifest = this.schema.parse(manifest);

    return validatedManifest;
  }
}

const loader = new ManifestLoader();

const manifest = loader.loadManifest(
  path.resolve(__dirname, `./manifest.json`)
);

export default manifest;
