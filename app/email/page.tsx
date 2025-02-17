import { EmailTemplate } from "@/components/custom/template";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
      <h2 className="text-sm font-semibold">Email example:</h2>

      <div className="bg-white py-6 rounded-md">
        <EmailTemplate firstName="Alex" link="#" />
      </div>
    </div>
  );
};

export default Page;
