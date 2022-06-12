export const randomInt = (max: number = 1, min: number = 0) => {
    return Math.round(Math.random() * (max-min)) + min;
}

export const filledArray = <T = number>(count: number, filler?: (index: number) => T): Array<T> => {
    const mapper = filler ? (x: any, i: number) => filler(i) : (x: any, i: number) => i as any;
    return new Array(count).fill(null).map(mapper);
}