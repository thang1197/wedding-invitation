"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import type { LatLngExpression } from "leaflet"; // 👈 this is important
import "leaflet/dist/leaflet.css";

export default function MyMap({
  initialCenter = [21.0461, 105.7986],
  initialZoom = 15,
}: {
  initialCenter?: LatLngExpression;
  initialZoom?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [markers, setMarkers] = useState<LatLngExpression[]>([initialCenter]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const L = require("leaflet");
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/marker-icon-2x.png",
      iconUrl: "/marker-icon.png",
      shadowUrl: "/marker-shadow.png",
    });
    setMounted(true);
  }, []);

  function ClickHandler() {
    useMapEvents({
      click(e) {
        setMarkers((prev) => [...prev, [e.latlng.lat, e.latlng.lng]]);
      },
    });
    return null;
  }

  if (!mounted) return <div style={{ height: 400 }}>Loading map...</div>;

  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <ClickHandler />
      {markers.map((pos, i) => (
        <Marker position={pos} key={i}>
          <Popup>{`Marker #${i + 1}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
