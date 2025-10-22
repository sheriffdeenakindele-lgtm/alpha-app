import Hero from "../section/hero";
import CoreTracks from "../section/CoreTracks";
import SpecializedTracks from "../section/SpecializedTracks";
import Outcome from "../section/outcome";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <Hero />
      {/* core tracks section */}
      <CoreTracks />
      {/* specialized tracks section */}
      <SpecializedTracks />
      {/* outcome section */}
      <Outcome />
    </main>
  );
}
