import fs from 'fs'
import path from 'path'

class State {
    public save (content: string): void  {
        const dataString = JSON.stringify(content);
        fs.writeFileSync(path.resolve(__dirname, '..', '..', 'data.json'), dataString);
    }

    public load() {
        const fileBuffer = fs.readFileSync(path.resolve(__dirname, '..', '..', 'data.json'), 'utf-8');
        const dataJson = JSON.parse(fileBuffer);
        return dataJson
    }
}

export default new State()