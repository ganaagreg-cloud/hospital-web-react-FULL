export default function AppointmentModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.4)"}}>
      <div className="card" style={{maxWidth:400,margin:"10% auto"}}>
        <h3>Цаг авах хүсэлт</h3>
        <p className="small">Манай ажилтан тантай холбогдоно.</p>
        <input className="btn" placeholder="Нэр" />
        <br/><br/>
        <input className="btn" placeholder="Утас" />
        <br/><br/>
        <button className="btn primary" onClick={onClose}>Илгээх</button>
      </div>
    </div>
  );
}