/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                primary: {
                    white: 'hsl(0, 0%, 100%)',
                    lightGray: 'hsl(212, 45%, 89%)',
                    grayishBlue: 'hsl(220, 15%, 55%)',
                    darkBlue: 'hsl(218, 44%, 22%)',
                    link: 'hsl(228, 45%, 44%)'
                }
            },
            fontSize: {
                base: ['1rem', '1.35rem'],
                xl: ['1.375rem', '1.65rem'],
            },
            fontFamily: {
                sans: [
                    'Outfit',
                    ...defaultTheme.fontFamily.sans,
                  ],
            },
            maxWidth: {
                'sm': '22rem',
            }
        },
    },
    plugins: [],
}
