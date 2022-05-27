const rewire = require("rewire")
const script = rewire("../script")
const ready = script.__get__("ready")
// @ponicode
describe("ready", () => {
    test("0", () => {
        let result = ready()
        expect(result).toMatchSnapshot()
    })
})
