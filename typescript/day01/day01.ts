import * as fs from 'fs';
import * as path from 'path';

function readInput(filename: string): number[] {
    let file = fs.readFileSync(filename, "utf-8")
    return file.split("\n").map((line) => parseInt(line))
}

function getTriples(input: number[]): number[] {
    let result: number[] = [];
    input.forEach((value, index) => {
        result.push(value+input[index+1]+input[index+2]);
    })
    return result
}

function getIncreases(input: number[]): number {
    let prev = Number.MAX_SAFE_INTEGER;
    let increases = 0;
    input.forEach((value) => {
        if (value > prev) {
            increases++
        }
        prev = value
    });
    return increases
}

function main() {
    const filename = path.join(__dirname, '..', '..', 'inputs/day01.txt');
    const input = readInput(filename);

    console.log("Part 1: " + getIncreases(input));

    const triples = getTriples(input)
    console.log("Part 2: " + getIncreases(triples))
}

main()