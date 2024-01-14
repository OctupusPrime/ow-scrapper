import {GlobalKeyboardListener} from "node-global-key-listener";
import { convertImageToNegative } from "./processImage.js";

const v = new GlobalKeyboardListener();

v.addListener(function (e, down) {
  if (e.state == "DOWN" && e.name == "F") {
      console.log("Processing image...")
      convertImageToNegative()
      return true;
  }
});