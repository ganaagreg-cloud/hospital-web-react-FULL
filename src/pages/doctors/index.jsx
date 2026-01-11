export default function Doctors({ onOpenAppointment }) {
  return (
    <main className="container">
      <h1>Манай эмч нар</h1>
      <div className="card">
        <h3>Dr. Sarah Mitchell</h3>
        <p className="small">Зүрх судасны эмч</p>
        <button className="btn primary" onClick={onOpenAppointment}>Цаг авах</button>
      </div>
    </main>
  );
}