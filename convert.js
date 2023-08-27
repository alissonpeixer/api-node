const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'dist'); // Diretório de destino
const files = fs.readdirSync(directoryPath);

files.forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(directoryPath, file);
    const originalCode = fs.readFileSync(filePath, 'utf-8');
    const modifiedCode = originalCode.replace(/\.ts/g, '.js');
    fs.writeFileSync(filePath, modifiedCode, 'utf-8');
  }
});