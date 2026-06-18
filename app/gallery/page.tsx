import CateringPage from "../components/CateringPage";
import Reveal from "../components/Reveal";

const shots = [
  "Charcuterie board", "Plated dinner", "Outdoor reception", "Appetizer spread",
  "Dessert table", "Family-style entrees", "Wedding tablescape", "Birthday spread",
  "Grazing table", "Cocktail bites", "Hot entrees", "Sweet treats",
];

export default function Gallery() {
  return (
    <CateringPage
      label="Gallery"
      title="Special moments, one bite at a time."
      intro="A look at recent celebrations. Real event photography drops in here, so these are placeholders for now."
    >
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {shots.map((s, i) => (
          <Reveal key={i} delay={(i % 3) * 0.05}>
            <div className={`media ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}>
              <span className="cap">{s}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </CateringPage>
  );
}