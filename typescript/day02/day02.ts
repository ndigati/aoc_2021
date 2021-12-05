import * as fs from 'fs';
import * as path from 'path';

function readInput(filename: string): Command[] {
    let file = fs.readFileSync(filename, "utf-8")
    let commands: Command[] = [];

    file.split("\n").forEach((value) => {
        let [direction, unit] = value.split(' ');
        commands.push({direction: direction, units: parseInt(unit)})
    });

    return commands
}

interface Command {
    direction: string,
    units: number
}

interface Position {
    horizontal: number,
    depth: number,
    aim: number
}

function calculateFinalPosition(input: Command[], withAim: boolean): Position {
    const finalPosition: Position = { horizontal: 0, depth: 0, aim: 0};

    for (const command of input) {
        switch (command.direction) {
            case "forward":
                if (withAim) {
                    finalPosition.horizontal += command.units;
                    finalPosition.depth += (command.units * finalPosition.aim)
                } else {
                    finalPosition.horizontal += command.units;
                }
                break;
            case "down":
                if (withAim) {
                    finalPosition.aim += command.units;
                } else {
                    finalPosition.depth += command.units;
                }
                break;
            case "up":
                if (withAim) {
                    finalPosition.aim -= command.units;
                } else {
                    finalPosition.depth -= command.units;
                }
                break;
            default:
                break;
        }
    }

    return finalPosition
}

function main() {
    const filename = path.join(__dirname, '..', '..', 'inputs/day02.txt');
    const input = readInput(filename);

    const part1 = calculateFinalPosition(input, false);
    const part2 = calculateFinalPosition(input, true);
    console.log("Part 1: " + (part1.depth*part1.horizontal));
    console.log("Part 2: " + (part2.depth*part2.horizontal));
}

main()