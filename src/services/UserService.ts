import { UserRepository } from "../repositories/UserRepository";
import { User } from "../types/User";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(user: User): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(user.email);

    if (existingUser) {
      throw new Error("User already exists");
    }
    return await this.userRepository.create(user);
  }

  async listUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async updateUser(user: User): Promise<User | null> {
    const newUser = this.userRepository.findByEmail(user.email);

    if (!newUser) {
      throw new Error("User not found");
    }

    return newUser;
  }

  async deleteUser(user: User): Promise<DeleteResult> {
    const result = await this.userRepository.delete(user);
    if (result.deletedCount === 0) {
      throw new Error("User not found or already deleted");
    }

    return result;
  }
}