import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages..service';
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // dont do this in real app
    // USE DEPENDENCY INJECTIONS
    this.messagesService = new MessagesService();
  }
  @Get()
  async listMessages() {
    return await this.messagesService.findAll();
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return await this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    console.log(id);

    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found ');
    }
    return message;
  }
}
