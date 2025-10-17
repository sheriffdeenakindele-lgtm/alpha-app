import Image from "next/image";
import Hero from "../section/hero";
import CoreTracks from "../section/CoreTracks";
import SpecializedTracks from "../section/SpecializedTracks";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <Hero />
      {/* core tracks section */}
      <CoreTracks />
      {/* specialized tracks section */}
      <SpecializedTracks />
    </main>
  );
}
