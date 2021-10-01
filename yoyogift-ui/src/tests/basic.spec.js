describe("Math Test Suite", () => {
    // sync
    // test case it statement, english it word
    it("should add two +ve numbers", () => {
        // execution done here, no asyc code, no promise, no api, no setIntervl/Timer

        // 1 or more matchers
        // expect(actual).toBe(expected)
        expect(1 + 2).toBe(3)
        expect(1 + 1).toBe(2)
    })

    // sync
    // test case 2
    it("should add two -ve numbers", () => {
        expect(-1 + -2).toBe(-3)
        expect(-1 + -1).toBe(-2)
    })

})