import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  console.log(req);
  return NextResponse.json({ ok: true });
}
