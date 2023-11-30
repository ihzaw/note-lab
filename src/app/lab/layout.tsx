import ListItem from "@/common/listItem";
import { SAMPLE_SIDEBAR_ITEMS } from "@/constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <ul className="bg-blue-500 col-span-3 p-4">
        {SAMPLE_SIDEBAR_ITEMS.map((item) => {
          return <ListItem key={item} label={item} href={`/lab/${item.split(' ').join('')}`} />;
        })}
      </ul>
      <div className="bg-red-300 col-span-9">{children}</div>
    </div>
  );
}
