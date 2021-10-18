import rewire from "rewire"
import React from "react"
import { render } from "@testing-library/react"
const App = rewire("./App")
const format = App.__get__("format")
const formatWithMulti = App.__get__("formatWithMulti")
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// @ponicode
describe("format", () => {
    test("0", () => {
        let callFunction = () => {
            format(400)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            format(410)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            format(4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            format(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            format(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            format(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("formatWithMulti", () => {
    test("0", () => {
        let callFunction = () => {
            formatWithMulti(70, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            formatWithMulti(1, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            formatWithMulti(65, 159)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            formatWithMulti(1, 159)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            formatWithMulti(2, 196)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            formatWithMulti(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
