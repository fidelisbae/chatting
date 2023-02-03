import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { RoomService } from './room.service';

@Controller('api')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('rooms')
  async getRooms(@Req() req: Request, @Res() res: Response) {
    const data = await this.roomService.findAll();

    return res.status(200).json({
      result: true,
      data,
    });
  }
}