export declare const sleep: (ms: number) => Promise<unknown>;
export declare const testNumberOfImages: (canvasElement: HTMLElement, expectedNumberOfImgs: number) => Promise<void>;
export declare const testCarouselFirstMount: (canvasElement: HTMLElement, firstClickIndex: number, expectedTotalNumberOfImgs: number) => Promise<void>;
export declare const testCarouselSecondClick: (canvasElement: HTMLElement, secondClickIndex: number) => Promise<void>;
export declare const userPresESC: (canvasElement: HTMLElement) => Promise<void>;
