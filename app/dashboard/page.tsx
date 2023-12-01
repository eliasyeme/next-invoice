import { lusitan } from "@/app/ui/fonts";
import { fetchRevenue, fetchLatestInvoices, fetchCardData} from "@/app/lib/data";
import RevenueChart from "@/app/ui/dashboard/revenue-chart"
import LatestInvoice from "@/app/ui/dashboard/latest-invoice";
import { Card } from "../ui/dashboard/cards";

export default async function Page() {
	const revenue = await fetchRevenue();
	const latestInvoice = await fetchLatestInvoices();
	const {totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers} = await fetchCardData()
  return (
		<main>
			<h1 className={`${lusitan.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<Card title="Collected" value={totalPaidInvoices} type="collected"/>
				<Card title="Pending" value={totalPendingInvoices} type="pending"/>
				<Card title="Total Invoices" value={numberOfInvoices} type="invoice"/>
				<Card title="Total Customers" value={numberOfCustomers} type="customers"/>
			</div>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<RevenueChart revenue={revenue}/>
				<LatestInvoice latestInvoice={latestInvoice}/>
			</div>
		</main>
	)
}
