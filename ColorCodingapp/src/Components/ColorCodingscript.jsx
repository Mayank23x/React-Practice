  import Home from "./Home";
  const ColorCoding = [
        {
            Digit: 0,
            Color: "Black",
            Multiplier: "x1",
            Tolerance: "--",
            Temperature: 250
        },
        {
            Digit: 1,
            Color: "Brown",
            Multiplier: "x10",
            Tolerance: "±1%",
            Temperature: 100
        },
        {
            Digit: 2,
            Color: "Red",
            Multiplier: "x100",
            Tolerance: "±2%",
            Temperature: 50
        },
        {
            Digit: 3,
            Color: "Orange",
            Multiplier: "x1,000",
            Tolerance: "--",
            Temperature: 15
        },
        {
            Digit: 4,
            Color: "Yellow",
            Multiplier: "x10,000",
            Tolerance: "--",
            Temperature: 25
        },
        {
            Digit: 5,
            Color: "Green",
            Multiplier: "x100,000",
            Tolerance: "±0.5%",
            Temperature: 20
        },
        {
            Digit: 6,
            Color: "Blue",
            Multiplier: "x1,000,000",
            Tolerance: "±0.25%",
            Temperature: 10
        },
        {
            Digit: 7,
            Color: "Violet",
            Multiplier: "x10,000,000",
            Tolerance: "±0.1%",
            Temperature: 5
        },
        {
            Digit: 8,
            Color: "Grey",
            Multiplier: "x100,000,000",
            Tolerance: "±0.05%",
            Temperature: 1
        },
        {
            Digit: 9,
            Color: "White",
            Multiplier: "x1,000,000,000",
            Tolerance: "--",
            Temperature: "--"
        },
        {
            Digit: "--",
            Color: "Gold",
            Multiplier: "x0.1",
            Tolerance: "±5%",
            Temperature: "--"
        },
        {
            Digit: "--",
            Color: "Silver",
            Multiplier: "x0.01",
            Tolerance: "±10%",
            Temperature: "--"
        }
    ];

function ColorCodingscript() {
  return (
    <Home colorCodingData={ColorCoding}/>
  )
}

export default ColorCodingscript
