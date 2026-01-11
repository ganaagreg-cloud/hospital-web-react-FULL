import { useState } from "react";
import AppRoutes from "./routes/Routes.jsx";
import AppShell from "./components/layout/AppShell.jsx";
import AppointmentModal from "./components/AppointmentModal.jsx";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <AppShell onOpenAppointment={() => setOpen(true)}>
      <AppRoutes onOpenAppointment={() => setOpen(true)} />
      <AppointmentModal open={open} onClose={() => setOpen(false)} />
    </AppShell>
  );
}