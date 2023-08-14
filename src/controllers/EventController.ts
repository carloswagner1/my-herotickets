import { NextFunction, Request, Response } from "express";
import { EventUseCase } from "../useCases/EventUseCase";

class EventController {
    constructor(private eventUseCase: EventUseCase){}
    async create(requet: Request, response: Response, next: NextFunction) {
        const eventData = requet.body;
        try {
            await this.eventUseCase.create(eventData)
            return response
            .status(201)
            .json({message: 'Evento criado com sucesso'})
        } catch (error) {
            next(error);
        }
    }
}

export { EventController }