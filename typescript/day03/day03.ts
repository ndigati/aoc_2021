import * as fs from 'fs';
import * as path from 'path';

function readInput(filename: string) {
    let file = fs.readFileSync(filename, "utf-8")
    return file.split('\n')
}

function powerConsumption(gammaRate:number, epsilonRate: number): number {
    return gammaRate * epsilonRate;
}

function lifeSupportRating(oxygenGeneratorRating: number, scrubberRating: number): number {
    return oxygenGeneratorRating * scrubberRating;
}

/*
 * This is probably slow
 * Bit shifting on the int's themselves is probably faster
 * Need to look up the correct way to do that and replace this function :)
 */
function calculateRatesSlow(input: string[]): [number, number] {
    // all binary numbers in our input should be the same number of bits
    const numBits = input[0].length
    let bitPositionCounts: number[] = new Array(numBits).fill(0);

    for (const line of input) {
        line.split('').forEach((char, index) => {
            if (char === "1") {
                bitPositionCounts[index] += 1;
            }
        })
    }

    let gammaRate = "";
    let epsilonRate = "";
    let half = input.length / 2;
    bitPositionCounts.forEach(count => {
        if (count > half) {
            // 1's are the most common
            gammaRate += "1";
            epsilonRate += "0";
        } else {
            gammaRate += "0";
            epsilonRate += "1";
        }
    });


    return [parseInt(gammaRate, 2), parseInt(epsilonRate, 2)]
}

function main() {
    const filename = path.join(__dirname, '..', '..', 'inputs/day03.txt');
    const input = readInput(filename);

    const [gammaRate, epsilonRate] = calculateRatesSlow(input);

    console.log('Part 1: ' + powerConsumption(gammaRate, epsilonRate));
}

main()