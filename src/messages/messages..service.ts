import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // MessagesRepo: MessagesRepository;
  constructor(public MessagesRepo: MessagesRepository) {
    // this.MessagesRepo = MessagesRepo;
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
