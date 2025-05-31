import { NextResponse } from "next/server";
import { mysqlpool } from "../../../utils/server";
const db = mysqlpool.promise();
export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const result = await db.query(
      "INSERT INTO users (usernames, passwords) VALUES (?, ?)",
      [username, password]
    );
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
