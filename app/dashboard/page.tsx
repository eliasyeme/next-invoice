import { lusitan } from "@/app/ui/fonts";
import { fetchRevenue, fetchLatestInvoices } from "@/app/lib/data";
import RevenueChart from "@/app/ui/dashboard/revenue-chart"
import LatestInvoice from "@/app/ui/dashboard/latest-invoice";

export default async function Page() {
	const revenue = await fetchRevenue();
	const latestInvoice = await fetchLatestInvoices();

  return (
		<main>
			<h1 className={`${lusitan.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
			<div>
				{/* TODO: card */}
			</div>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<RevenueChart revenue={revenue}/>
				<LatestInvoice latestInvoice={latestInvoice}/>
			</div>
		</main>
	)
}
