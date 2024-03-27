
import { Button } from "@/src/components/ui/button"

export function FleetAndPaymentInfo() {
  return (
    <div className="max-w-3xl mx-auto my-8 pb-8 border-b-2 border-gray-200">
      <section aria-labelledby="fleet-owned-section">
        <h2 className="text-2xl font-semibold" id="fleet-owned-section">
          Fleet owned (8)
        </h2>
        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center p-4 border rounded">
            <span className="text-lg font-semibold">3</span>
            <span>LCV</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded">
            <span className="text-lg font-semibold">3</span>
            <span>Truck</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded">
            <span className="text-lg font-semibold">1</span>
            <span>Container</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded">
            <span className="text-lg font-semibold">1</span>
            <span>Trailer</span>
          </div>
        </div>
      </section>
      <section aria-labelledby="payments-section" className="mt-8">
        <h2 className="text-2xl font-semibold" id="payments-section">
          Payments
        </h2>
        <div className="mt-4 p-4 border-dashed border-2 rounded-lg">
          <p className="text-lg">Add bank account to make payment through vahak.</p>
          <Button className="mt-2" variant="outline">
            + Click to add Bank Account
          </Button>
        </div>
      </section>
    </div>
  )
}
