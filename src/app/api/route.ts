import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  return NextResponse.json({ms: 'OIEE'})
}
