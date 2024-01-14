import sharp from "sharp";

export const convertImageToNegative = async () => {
  const output = await sharp('/Users/mihailsokil/Desktop/ow2-scraper/assets/test.png')
    .greyscale()
    // .linear(10, 0)
    .negate({ alpha: false })
    .toFile('/Users/mihailsokil/Desktop/ow2-scraper/assets/test-negative.png');
}