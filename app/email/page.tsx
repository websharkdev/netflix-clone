import { EmailTemplate } from "@/components/custom/template";
import { defaultMetadata } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Email Preview",
};

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
      <h2 className="text-sm font-semibold">Email example:</h2>

      <div className="bg-white border border-input py-6 rounded-md">
        <EmailTemplate name="Alex" link="#" />
      </div>
    </div>
  );
};

export default Page;
