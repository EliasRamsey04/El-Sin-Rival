import { Jimp } from "jimp";

async function main() {
    try {
        const image = await Jimp.read('src/assets/logo.png');
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            // If the pixel is very light/white (e.g., r,g,b > 240)
            if (r > 240 && g > 240 && b > 240) {
                // Set alpha to 0 (transparent)
                this.bitmap.data[idx + 3] = 0;
            }
        });

        await image.write('src/assets/logo.png');
        console.log("Background removed successfully!");
    } catch (error) {
        console.error("Error processing image:", error);
    }
}

main();
