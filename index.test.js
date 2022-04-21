const searchMyShit = require("./index")

const mockDB = ["majom2", "kolbász2", "rája2", "pizza2", "gibbon2", "taliga2", "blood2", "sweat2", "beer2"];

it("this my 1st test", () => {
    expect("Hello").toEqual("Hello")
    searchMyShit(mockDB, "2")
});

it("search with empty result", () => {
    expect(searchMyShit(mockDB, "xxx")).toEqual([])  
});

it("real search with 2 keyword, expected not empty array as result", () => {
    expect(searchMyShit(mockDB, "2")).toEqual(["majom2", "kolbász2", "rája2", "pizza2", "gibbon2"])  
});