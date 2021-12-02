from typing import List
import sys

def parseInput() -> List[int]:
    result = []
    with open("day01/input.txt", 'r') as file:
        for line in file:
            result.append(int(line))
    return result

def computeIncreases(input: List[int]) -> int:
    increases = 0
    # no number in the input should be greater than this :)
    prev = sys.maxsize
    for i in input:
        if i > prev:
            increases += 1
        prev = i
    return increases

def getTriples(input: List[int]) -> List[int]:
    result = []
    index = 0
    while index < len(input):
        if index+3 > len(input):
            # return early we can't form another triple
            return result

        i1 = input[index]
        i2 = input[index+1]
        i3 = input[index+2]
        result.append(i1+i2+i3)
        index += 1
    return result

def part1(input: List[int]) -> int:
    return computeIncreases(input)

def part2(input: List[int]) -> int:
    return computeIncreases(getTriples(input))

if __name__ == '__main__':
    input = parseInput()
    print(part1(input))
    print(part2(input))