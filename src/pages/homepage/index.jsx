export default function Home({ onOpenAppointment }) {
  return (
    <main className="container">
      <div className="card">
        <h1>Same Hospital — Эрдэнэт</h1>
        <p className="small">Орчин үеийн оношилгоо, найдвартай эмчилгээ</p>
        <button className="btn primary" onClick={onOpenAppointment}>Цаг авах</button>
      </div>
    </main>
  );
}