import fsp from 'fs/promises';
import path from 'path';

export const getFileContentWithCache = async (
    url: string,
    filename: string,
): Promise<string> => {
    const filePath = path.join(__dirname, '..', 'cache', filename);

    let exists = true;

    try {
        const status = await fsp.lstat(filePath);
    } catch {
        exists = false;
    }

    if (!exists) {
        const response = await fetch(url);
        const text = await response.text();
        await fsp.writeFile(filePath, text);
    }

    return fsp.readFile(filePath, { encoding: 'utf-8' });
};
