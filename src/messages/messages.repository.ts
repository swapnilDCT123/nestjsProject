import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.josn', 'utf8');
    const messages = await JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.josn', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.js', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.josn', JSON.stringify(messages));

    return;
  }
}
