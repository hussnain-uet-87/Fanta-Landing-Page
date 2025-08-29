export default function FlavorCard({ name, color, img }) {
  return (
    <div className={`p-6 rounded-2xl shadow-lg text-white`} style={{ backgroundColor: color }}>
      <img src={img} alt={name} className="w-24 h-24 mx-auto mb-4 drop-shadow-xl" />
      <h3 className="text-xl font-bold text-center">{name}</h3>
    </div>
  );
}
