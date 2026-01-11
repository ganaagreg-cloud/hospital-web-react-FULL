export default function Services({ onOpenAppointment }) {
  return (
    <main className="container">
      <h1>Үйлчилгээ</h1>
      <div className="grid">
        <div className="card"><h3>Зүрх судас</h3></div>
        <div className="card"><h3>Хүүхдийн эмчилгээ</h3></div>
        <div className="card"><h3>Дүрс оношилгоо</h3></div>
      </div>
      <button className="btn primary" onClick={onOpenAppointment}>Цаг авах</button>
    </main>
  );
}