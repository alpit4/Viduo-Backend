import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
const registerUser = asyncHandler(async (req, res) => {
  const { email, fullName, username, password } = req.body;
  console.log("email: ", email);

//   if (
//     [email, fullName, username, password].some((field) => field?.trim() === "")
//   ) {
//     throw new ApiError(400, "All Fields are required");
//   }

  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  })

  if(existedUser){
    throw new ApiError(409,"User with email or username already exists.")
  }
});

export { registerUser };
