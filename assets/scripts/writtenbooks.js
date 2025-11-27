// Custom author colors
const authorColors = {
    'Anna_28': '#ff5555',
    'Ghostis_': '#55ffff',
    'Txkeykeeper': '#55ffff',
    'CaptainIceman': '#55ffff',

};

function getAuthorColor(author) {
    return authorColors[author] || '#4e9144'; // Default green color
}

// Book data
const books = [
    { title: 'MCO warps', author: 'ExtreemToukan', filename: '3loMCO.warps_ExtreemToukan_2025-11-14T1821.758Z.ghb' },
    { title: 'Saffron 82', author: 'Aidan', filename: '6Saffron.82_Aidan_2025-11-14T1821.759Z.ghb' },
    { title: 'Heavy Hearts', author: 'ExtreemToukan', filename: '9lHeavy.Hearts_ExtreemToukan_2025-11-14T1820.48Z.ghb' },
    { title: 'Book of Codes', author: 'Archvillain', filename: 'Book.of.Codes_Archvillain_2025-11-14T1821.848Z.ghb' },
    { title: 'CCCP VI', author: 'COYCTOP', filename: 'clCCCP..VI_COYCTOP_2025-11-14T1821.800Z.ghb' },
    { title: 'Cookie Movie Script', author: 'Ghomik', filename: 'Cookie.Movie.Script_Ghomik_2025-11-14T1825.647Z.ghb' },
    { title: 'Delta City', author: 'orchunter88', filename: 'Delta.City_orchunter88_2025-11-14T1825.147Z.ghb' },
    { title: 'didnt write this', author: 'Ghostis_', filename: 'didnt.write.this_Ghostis_2025-11-14T1823.397Z.ghb' },
    { title: 'Dub Post 6425', author: 'Txkeykeeper', filename: 'Dub.Post.6425_Txkeykeeper_2025-11-14T1822.454Z.ghb' },
    { title: 'dupe', author: 'SalC1', filename: 'dupe_SalC1_2025-11-14T1817.750Z.ghb' },
    { title: 'EEEEEEEEEEEEE V2', author: 'BranchyArtist31', filename: 'EEEEEEEEEEEEE.V2_BranchyArtist31_2025-11-14T1818.803Z.ghb' },
    { title: 'EEEEEEEEEEEEEEEE', author: 'BranchyArtist31', filename: 'EEEEEEEEEEEEEEEE_BranchyArtist31_2025-11-14T1821.49Z.ghb' },
    { title: 'Firey Pizza Menu', author: 'Anna_28', filename: 'Firey.Pizza.Menu_Anna28_2025-11-14T1825.650Z.ghb' },
    { title: 'gayshit', author: 'NightAbyss_', filename: 'gayshit_NightAbyss_2025-11-14T1824.747Z.ghb' },
    { title: 'Glorbs Dominion', author: 'feb1980', filename: 'Glorbs.Dominion_feb1980_2025-11-14T1824.997Z.ghb' },
    { title: 'HDOS 117 HD', author: 'BuffaloBom', filename: 'HDOS..117.HD_BuffaloBom_2025-11-14T1823.853Z.ghb' },
    { title: 'hello Vazkii', author: 'BuffaloBom', filename: 'hello.Vazkii_BuffaloBom_2025-11-14T1824.897Z.ghb' },
    { title: 'howtokillretro', author: 'NightAbyss_', filename: 'howtokillretro_NightAbyss_2025-11-14T1824.347Z.ghb' },
    { title: 'IM IN YOUR WALLS', author: 'Hijacked_', filename: 'IM.IN.YOUR.WALLS_Hijacked_2025-11-14T1824.50Z.ghb' },
    { title: 'Karma', author: 'Skittlekid', filename: 'Karma_Skittlekid_2025-11-14T1818.299Z.ghb' },
    { title: 'Yantheon Codex', author: 'CaptainIceman', filename: 'lYantheon.Codex_CaptainIceman_2025-11-14T1824.947Z.ghb' },
    { title: 'MAGIC', author: 'Milipede', filename: 'MAGIC_Milipede_2025-11-14T1825.97Z.ghb' },
    { title: 'meow', author: 'silly_parker', filename: 'meow_sillyparker_2025-11-14T1815.154Z.ghb' },
    { title: 'meow', author: 'SlowedSeal24541', filename: 'meow_SlowedSeal24541_2025-11-14T1818.649Z.ghb' },
    { title: 'Meowing Guide', author: 'ScenarioPlanet', filename: 'Meowing.Guide_ScenarioPlanet_2025-11-14T1822.250Z.ghb' },
    { title: 'NekoRei Chronic', author: 'BuffaloBom', filename: 'NekoRei.Chronic_BuffaloBom_2025-11-14T1819.758Z.ghb' },
    { title: 'OwO hiiii OwO', author: 'Bowola', filename: 'OwO.hiiii.OwO_Bowola_2025-11-14T1824.946Z.ghb' },
    { title: 'Ralsei for Presi', author: 'WeedRalsei', filename: 'Ralsei.for.Presi_WeedRalsei_2025-11-14T1818.0Z.ghb' },
    { title: 'Reflections', author: 'RebelCommander7', filename: 'Reflections_RebelCommander7_2025-11-14T1820.648Z.ghb' },
    { title: 'spam', author: 'SalC1', filename: 'spam_SalC1_2025-11-14T1817.103Z.ghb' },
    { title: 'The Nethernomicon', author: 'Milipede', filename: 'The.Nethernomicon_Milipede_2025-11-14T1818.354Z.ghb' },
    { title: 'The Prophecy', author: 'RebelCommander7', filename: 'The.Prophecy_RebelCommander7_2025-11-14T1821.949Z.ghb' },
    { title: 'Virgin gtnh fan', author: 'BuffaloBom', filename: 'Virgin.gtnh.fan_BuffaloBom_2025-11-14T1824.247Z.ghb' },
    { title: 'Vote Vellum', author: 'Aidan', filename: 'Vote.5lVellum_Aidan_2025-11-14T1825.753Z.ghb' },
    { title: 'Wither', author: 'Milipede', filename: 'Wither_Milipede_2025-11-14T1825.397Z.ghb' },
    { title: 'Writing', author: 'BranchyArtist31', filename: 'Writing_BranchyArtist31_2025-11-14T1817.453Z.ghb' },
    { title: 'Blockshire Lag (Vol 1)', author: '_author_', filename: '2Blockshire.4Lagr.7Vol.1_author_2025-11-27T1218.901Z.ghb' },
    { title: 'Blockshire Lag (Vol 2)', author: '_author_', filename: '2Blockshire.4Lagr.7Vol.2_author_2025-11-27T1219.442Z.ghb' }
];

// Minecraft color codes
const minecraftColors = {
    '0': '#000000', // Black
    '1': '#0000AA', // Dark Blue
    '2': '#00AA00', // Dark Green
    '3': '#00AAAA', // Dark Aqua
    '4': '#AA0000', // Dark Red
    '5': '#AA00AA', // Purple
    '6': '#FFAA00', // Gold
    '7': '#AAAAAA', // Gray
    '8': '#555555', // Dark Gray
    '9': '#5555FF', // Blue
    'a': '#55FF55', // Green
    'b': '#55FFFF', // Aqua
    'c': '#FF5555', // Red
    'd': '#FF55FF', // Light Purple
    'e': '#FFFF55', // Yellow
    'f': '#FFFFFF', // White
    'r': 'reset'    // Reset
};

function parseMinecraftColors(text) {
    // Split text by § character and process color codes
    let result = '';
    let currentColor = null;

    const parts = text.split('§');

    // First part has no color code
    if (parts[0]) {
        result += parts[0];
    }

    // Process remaining parts with color codes
    for (let i = 1; i < parts.length; i++) {
        if (parts[i].length === 0) continue;

        const code = parts[i][0].toLowerCase();
        const textAfter = parts[i].substring(1);

        if (minecraftColors[code]) {
            // Close previous color span if exists
            if (currentColor !== null) {
                result += '</span>';
            }

            if (minecraftColors[code] === 'reset') {
                currentColor = null;
            } else {
                currentColor = minecraftColors[code];
                result += `<span style="color: ${currentColor};">`;
            }
        }

        result += textAfter;
    }

    // Close final span if needed
    if (currentColor !== null) {
        result += '</span>';
    }

    return result;
}

async function loadBook(filename) {
    try {
        const response = await fetch(`../assets/mco/writtenbooks/${filename}`);
        const text = await response.text();

        // Parse the book content (skip the header, get everything after the separator)
        const lines = text.split('\n');
        let pages = [];
        let currentPageLines = [];
        let startIndex = 0;

        // Find where the actual content starts (after the ==== line)
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('===')) {
                startIndex = i + 1;
                break;
            }
        }

        // Get the content and format it into pages
        for (let i = startIndex; i < lines.length; i++) {
            let line = lines[i];

            // Check for page break marker
            if (line.includes('>>>>')) {
                if (currentPageLines.length > 0) {
                    pages.push(currentPageLines);
                }
                currentPageLines = [];
                continue;
            }

            // Split by ## markers (line breaks within the page)
            const subLines = line.split('##');
            for (let j = 0; j < subLines.length; j++) {
                if (subLines[j]) {
                    currentPageLines.push(subLines[j]);

                    // Enforce 14 line limit per page
                    if (currentPageLines.length >= 14) {
                        pages.push(currentPageLines);
                        currentPageLines = [];
                    }
                }
            }
        }

        // Add the last page if it has content
        if (currentPageLines.length > 0) {
            pages.push(currentPageLines);
        }

        // Limit to 100 pages
        pages = pages.slice(0, 100);

        // Create HTML for pages
        let content = '';
        for (let i = 0; i < pages.length; i++) {
            const pageLines = pages[i].slice(0, 14); // Enforce 14 line limit
            let pageContent = '';

            for (let j = 0; j < pageLines.length; j++) {
                let line = pageLines[j];
                // Limit to 1023 characters per page
                if (pageContent.length + line.length > 1023) {
                    line = line.substring(0, 1023 - pageContent.length);
                }
                // Parse Minecraft color codes
                line = parseMinecraftColors(line);
                pageContent += line;
                if (j < pageLines.length - 1) {
                    pageContent += '<br>';
                }
            }

            // Add page number
            content += `<div class="minecraft-page">
                <div class="minecraft-page-content">${pageContent}</div>
                <div class="minecraft-page-number">${i + 1}</div>
            </div>`;
        }

        return content || '<p>No content available.</p>';
    } catch (error) {
        return '<p>Error loading book content.</p>';
    }
}

async function displayBooks() {
    const container = document.getElementById('books-container');

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-item';

        const header = document.createElement('div');
        header.className = 'book-header';
        const authorColor = getAuthorColor(book.author);
        header.innerHTML = `
            <span class="book-title">${book.title}</span>
            <span class="book-author" style="color: ${authorColor} !important;">by ${book.author}</span>
            <span class="dropdown-arrow">▼</span>
        `;

        const content = document.createElement('div');
        content.className = 'book-content';
        content.style.display = 'none';
        content.innerHTML = '<p class="loading">Loading...</p>';

        header.onclick = async function() {
            if (content.style.display === 'none') {
                // Load content if not already loaded
                if (content.innerHTML.includes('Loading')) {
                    const bookContent = await loadBook(book.filename);
                    content.innerHTML = bookContent;
                }
                content.style.display = 'block';
                header.querySelector('.dropdown-arrow').textContent = '▲';
            } else {
                content.style.display = 'none';
                header.querySelector('.dropdown-arrow').textContent = '▼';
            }
        };

        bookDiv.appendChild(header);
        bookDiv.appendChild(content);
        container.appendChild(bookDiv);
    }
}

displayBooks();
