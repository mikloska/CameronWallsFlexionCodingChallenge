// object with equations to convert each unit to another unit
const conversions = {
    Fahrenheit: {
        Rankine: (num) => num + 459.67,
        Kelvin: (num) => (num - 32) * (5/9) + 273.15,
        Celsius: (num) => (num - 32) * (5/9)
    },
    Rankine: {
        Fahrenheit: (num) => num - 459.67,
        Kelvin: (num) => num * (5/9),
        Celsius: (num) => (num - 491.67) * (5/9)
    },
    Kelvin: {
        Fahrenheit: (num) => (num - 273.15) * (9/5) + 32,
        Rankine: (num) => num * 1.8,
        Celsius: (num) => num - 273.15
    },
    Celsius: {
        Fahrenheit: (num) => (num * 9/5) + 32,
        Rankine: (num) => num * 9/5 + 491.67,
        Kelvin: (num) => num + 273.15
    },
    Liter: {
        Tablespoons: (num) => num * 67.628,
        'Cubic-Inches': (num) => num * 61.024,
        Cups: (num) => num * 4.167,
        'Cubic-Feet': (num) => num / 28.317,
        Gallons: (num) => num / 3.785
    },
    Tablespoons: {
        Liter: (num) => num / 67.628,
        'Cubic-Inches': (num) => num / 1.108,
        Cups: (num) => num / 16.231,
        'Cubic-Feet': (num) => num / 1915,
        Gallons: (num) => num / 256
    },
    'Cubic-Inches': {
        Liter: (num) => num / 61.024,
        Tablespoons: (num) => num * 1.108,
        Cups: (num) => num / 14.646,
        'Cubic-Feet': (num) => num / 1728,
        Gallons: (num) => num / 231
    },
    Cups: {
        Liter: (num) => num / 4.167,
        Tablespoons: (num) => num * 16.231,
        'Cubic-Inches': (num) => num * 14.646,
        'Cubic-Feet': (num) => num / 118,
        Gallons: (num) => num / 15.773
    },
    'Cubic-Feet': {
        Liter: (num) => num * 28.317,
        Tablespoons: (num) => num * 1915,
        'Cubic-Inches': (num) => num * 1728,
        Cups: (num) => num * 118,
        Gallons: (num) => num * 7.481
    },
    Gallons: {
        Liter: (num) => num * 3.785,
        Tablespoons: (num) => num * 256,
        'Cubic-Inches': (num) => num * 231,
        Cups: (num) => num * 15.773,
        'Cubic-Feet': (num) => num / 7.481
    }
};

module.exports = conversions;