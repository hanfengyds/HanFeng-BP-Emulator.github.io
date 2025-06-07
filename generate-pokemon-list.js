const fs = require('fs');
const path = require('path');

const pokemonDir = path.join(__dirname, '../assets/pokemon');
const outputFile = path.join(pokemonDir, 'pokemon-list.json');

// 获取所有png文件（排除_temp临时文件）
const files = fs.readdirSync(pokemonDir)
    .filter(file => file.endsWith('.png') && !file.includes('_temp'))
    .sort((a, b) => a.localeCompare(b));

// 生成JSON结构
const pokemonList = files.map(file => ({
    name: path.basename(file, '.png'),
    image: file
}));

// 写入文件（使用4空格缩进）
fs.writeFileSync(outputFile, JSON.stringify(pokemonList, null, 4));

console.log(`成功生成 ${files.length} 个精灵的列表！`);