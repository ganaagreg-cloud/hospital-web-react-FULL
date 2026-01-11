import { Link } from "react-router-dom";

export default function AppShell({ children, onOpenAppointment }) {
  return (
    <>
      <nav className="container" style={{display:"flex",gap:16,alignItems:"center"}}>
        <strong>Same Hospital</strong>
        <Link to="/">Үндсэн</Link>
        <Link to="/services">Үйлчилгээ</Link>
        <Link to="/about">Бидний тухай</Link>
        <Link to="/doctors">Эмч нар</Link>
        <Link to="/blog">Блог</Link>
        <button className="btn primary" onClick={onOpenAppointment}>Цаг авах</button>
      </nav>
      {children}
    </>
  );
}