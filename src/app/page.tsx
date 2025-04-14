import { Waitlist } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 px-4 py-16">
      <div className="text-center mb-8 w-full max-w-2xl">
        <h1 className="font-bold text-gray-900 mb-2 text-xl sm:text-2xl md:text-3xl">
          Discover a new way of collecting with{" "}
          <span className="text-[#5056ee]">Dexora!</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-md md:text-lg">
          We&apos;re building a free, modern trading card app that leverages scanning
          technology! Did I say free?
        </p>
      </div>

      <Waitlist />
    </div>
  );
}
