import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const reqData = await req.json();
  console.log(reqData);
  return NextResponse.json({ ok: true });
}
