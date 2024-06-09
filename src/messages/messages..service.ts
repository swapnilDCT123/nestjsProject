import { RequestTimeoutException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
export class MessagesService {
  MessagesRepo: MessagesRepository;
  constructor() {
    // create a new instance of MessageRepository
    // Service is creating ist own Dependencies
    //DONT DO THIS IN REAL APPS
    this.MessagesRepo = new MessagesRepository();
    // thisis very temporary line of code do not used in real app
    // used depepndancies injection method
  }

  async findOne(id: string) {
    return await this.MessagesRepo.findOne(id);
  }

  async findAll() {
    return await this.MessagesRepo.findAll();
  }

  async create(content: string) {
    return this.MessagesRepo.create(content);
  }
}
