// Build: npx tailwindcss@3 -i tailwind.input.css -o styles.css --minify
        module.exports = {
            darkMode: 'class', content: ['./index.html'],
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            gold: '#FFC700',
                            amber: '#F59E0B',
                            obsidian: '#0B0F17',
                            surface: '#111827'
                        }
                    }
                }
            }
        }
