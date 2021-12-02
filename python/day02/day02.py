from typing import List, Tuple
import sys

def parseInput() -> List[Tuple[str, int]]:
    result = []
    with open("day02/input.txt", 'r') as file:
        for line in file:
            direction_units = line.split(' ')
            t = (direction_units[0], int(direction_units[1]))
            result.append(t)
    return result

def calculateFinalPosition(input: List[Tuple[str, int]], with_aim: bool) -> Tuple[int, int]:
    horizontal = 0
    depth = 0
    aim = 0
    for direction, units in input:
        if direction == "forward":
            horizontal += units
            if with_aim:
                depth += (units*aim)
        elif direction == "down":
            if with_aim:
                aim += units
            else:
                depth += units
        elif direction == "up":
            if with_aim:
                aim -= units
            else:
                depth -= units
    return (horizontal, depth)

def part1(input: List[Tuple[str, int]]):
    final_position = calculateFinalPosition(input, False)
    return (final_position[0] * final_position[1])

def part2(input: List[Tuple[str, int]]):
    final_position = calculateFinalPosition(input, True)
    return (final_position[0] * final_position[1])

if __name__ == '__main__':
    input = parseInput()
    print(part1(input))
    print(part2(input))
