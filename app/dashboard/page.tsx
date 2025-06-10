import DashboardNavbar from "../components/DashboardNavbar";
import DashboardContent from "../components/DashboardContent";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <DashboardContent />
    </div>
  );
}
