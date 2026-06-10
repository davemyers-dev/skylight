// Bundled airport geometry, drawn at true geographic position so departures and
// arrivals visibly line up with the runways. Coordinates from OurAirports (KSFO).

export interface Runway {
  leIdent: string;
  heIdent: string;
  le: [number, number]; // [lat, lon]
  he: [number, number];
  widthFt: number;
}

export interface Airport {
  icao: string;
  name: string;
  runways: Runway[];
}

export const SFO: Airport = {
  icao: "KSFO",
  name: "SFO",
  runways: [
    { leIdent: "10L", heIdent: "28R", le: [37.628742, -122.39341], he: [37.613538, -122.35716], widthFt: 200 },
    { leIdent: "10R", heIdent: "28L", le: [37.626298, -122.393124], he: [37.61172, -122.358367], widthFt: 200 },
    { leIdent: "1L", heIdent: "19R", le: [37.607898, -122.38295], he: [37.626476, -122.37063], widthFt: 200 },
    { leIdent: "1R", heIdent: "19L", le: [37.606333, -122.381061], he: [37.627346, -122.367124], widthFt: 200 },
  ],
};

// Colorado Springs Airport. Coordinates from OurAirports (KCOS).
export const COS: Airport = {
  icao: "KCOS",
  name: "COS",
  runways: [
    { leIdent: "12", heIdent: "30", le: [38.8232, -104.714996], he: [38.807098, -104.695], widthFt: 200 },
    { leIdent: "17L", heIdent: "35R", le: [38.816101, -104.685997], he: [38.778999, -104.685997], widthFt: 200 },
    { leIdent: "17R", heIdent: "35L", le: [38.8241, -104.716003], he: [38.7938, -104.716003], widthFt: 200 },
  ],
};

/** Airports drawn on the map (easy to extend). */
export const AIRPORTS: Airport[] = [SFO, COS];
