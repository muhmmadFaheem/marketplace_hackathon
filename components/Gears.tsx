
import { GearCarousel1 } from "@/components/GearCarousel1";
import { GearCarousel2 } from "@/components/GearCarousel2";

export default function Gears() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-3 ml-2">Gear Up</h1>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-10">
        <GearCarousel1 />
        <GearCarousel2 />
      </div>
    </section>

  
  );
}
