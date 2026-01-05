import DashboardLayout from '@/app/components/templates/DashboardLayout';
import SalesChart from '@/app/components/organisms/SalesChart';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <SalesChart />
    </DashboardLayout>
  );
}
