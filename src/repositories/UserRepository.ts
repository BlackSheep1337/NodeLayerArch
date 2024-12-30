import { UserModel } from "../models/UserModel";
import { User } from "../types/User";

export class UserRepository {
  async create(user: User): Promise<User> {
    const newUser = new UserModel(user);
    return await newUser.save();
  }
  async findByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({ email }).exec();
  }
  async findAll(): Promise<User[]> {
    return await UserModel.find().exec();
  }
  async update(user: User): Promise<User | null> {
    const updatedUser = await UserModel.updateOne(
      { _id: user.id },
      { $set: user },
    );

    if (updatedUser.matchedCount === 0) {
      return null;
    }

    return await UserModel.findOne({ _id: user.id });
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await UserModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      throw new Error("User not found or already deleted");
    }

    return result;
  }
}
