import UserModel from "../datasources/models/Users";
import AccessLogModel from "../datasources/models/AccessLog";

export const Queries = {
  createUser: async (_, { name, role }) => {
    try {
      const user = new UserModel({
        name,
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  },
  createAccessLog: async (_, { userId, action }) => {
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }

      const accessLog = new AccessLogModel({
        user: user._id,
        action,
        timestamp: new Date(),
      });

      await accessLog.save();
      return accessLog;
    } catch (error) {
      throw new Error(`Error creating access log: ${error.message}`);
    }
  },
};
