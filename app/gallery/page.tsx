import CateringPage from "../components/CateringPage";

const shots = [
  "Charcuterie board", "Plated dinner", "Outdoor reception", "Appetizer spread",
  "Dessert table", "Family-style entrees", "Wedding tablescape", "Birthday spread",
  "Grazing table", "Cocktail bites", "Hot entrees", "Sweet treats",
];

export default function Gallery() {
  return (
    <CateringPage
      eyebrow="Gallery"
      title="Celebrating special moments, one bite at a time."
      es="Un bocado a la vez."
      intro="A look at recent celebrations. Real event photography drops in here — these are placeholders for now."
    >
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {shots.map((s, i) => (
          <div
            key={i}
            className={`photo-ph ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}
          >
            <span>{s}</span>
          </div>
        ))}
      </div>
    </CateringPage>
  );
}
