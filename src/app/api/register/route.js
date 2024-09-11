// pages/api/register.js
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import bcrypt from "bcryptjs";
import User from "../../../models/user"

export async function POST(req) {
  try {
    const requestData = await req.json();
    const { firstname, lastname, email, password } = requestData;
    const name = `${firstname} ${lastname}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB(); // Connect to MongoDB

    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
