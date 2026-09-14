import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e10600",
          color: "#fff",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: -0.4,
        }}
      >
        TO
      </div>
    ),
    { ...size },
  );
}
