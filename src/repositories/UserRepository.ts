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
    await UserModel.updateOne(
      { _id: user.id },
      { $set: user },
    ).exec();

    return await UserModel.findOne({ _id: user.id }).exec();
  }

  async delete(user: User): Promise<DeleteResult> {
    const result = await UserModel.deleteOne({ _id: user.id }).exec();

    return result;
  }
}
