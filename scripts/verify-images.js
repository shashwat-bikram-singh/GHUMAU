/**
 * verify-images.js
 * Utility script to scan the project for any remaining unsplash placeholders.
 */
import fs from 'fs';
import path from 'path';

const PAGES_DIR = './src/pages';
const PATTERN = /images\.unsplash\.com/g;

function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const matches = content.match(PATTERN);
            if (matches) {
                console.log(`[!] Found ${matches.length} Unsplash references in ${fullPath}`);
            }
        }
    });
}

console.log('--- Starting Image Verification ---');
scanDir(PAGES_DIR);
console.log('--- Verification Complete ---');
