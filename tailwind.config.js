/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f7ff',
                    100: '#e0effe',
                    200: '#bae2fd',
                    300: '#7cc8fb',
                    400: '#38a9f8',
                    500: '#0e8ceb',
                    600: '#026ec7',
                    700: '#0358a1',
                    800: '#074b85',
                    900: '#0c3f6f',
                    950: '#082849',
                },
                accent: {
                    50: '#fdfce9',
                    100: '#fbf8c5',
                    200: '#f8f08e',
                    300: '#f3e14e',
                    400: '#ecca1c',
                    500: '#d9ad12',
                    600: '#bb870c',
                    700: '#95620d',
                    800: '#7b4e11',
                    900: '#694114',
                    950: '#3d2207',
                },
                ocean: {
                    50: '#f1fafa',
                    100: '#daf1f2',
                    200: '#bae1e5',
                    300: '#8dcace',
                    400: '#59abb1',
                    500: '#3d8e95',
                    600: '#35757d',
                    700: '#306067',
                    800: '#2d5056',
                    900: '#29454a',
                    950: '#172a2e',
                },
            },
            boxShadow: {
                'premium': '0 20px 50px rgba(0, 0, 0, 0.1)',
                'premium-hover': '0 30px 60px rgba(0, 0, 0, 0.15)',
                'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            },
            backgroundImage: {
                'mesh': 'radial-gradient(at 0% 0%, hsla(210, 100%, 93%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180, 100%, 93%, 1) 0, transparent 50%)',
            },
            animation: {
                'slow-pulse': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
