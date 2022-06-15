import { uniqueNamesGenerator, adjectives, colors, animals, starWars, names } from 'unique-names-generator';

export const randomInt = (max: number = 1, min: number = 0) => {
    return Math.round(Math.random() * (max-min)) + min;
}

export const filledArray = <T = number>(count: number, filler?: (index: number) => T): Array<T> => {
    const mapper = filler ? (x: any, i: number) => filler(i) : (x: any, i: number) => i as any;
    return new Array(count).fill(null).map(mapper);
}

const cyrb53 = function(str: string, seed: number = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

export interface UserDetails {
    email: string,
    name: string,
    age: number
}

export const getSomeUser = (seed?: string | number): UserDetails => {
    const randomMailVal = uniqueNamesGenerator({ dictionaries: [colors, animals], length: 2, separator: "-", seed });
    const randomName = uniqueNamesGenerator({ dictionaries: [names, starWars, names, names], length: 2, separator: " ", seed });
    return {
        email: `${randomMailVal}@gmail.com`,
        name: randomName,
        age: (cyrb53(randomMailVal) % 40) + 18
    }
}

