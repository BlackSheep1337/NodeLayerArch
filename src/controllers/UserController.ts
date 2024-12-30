import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.registerUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    const user = await this.userService.listUsers();
    res.status(201).json(user);
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await this.userService.updateUser(req.body);
      res.status(200).json(newUser);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.userService.deleteUser(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}