import { ChevronRight } from "react-feather";
import Link from "next/link";

type ListItemProps = {
  label: string;
  href: string;
  isActive?: boolean;
};

const ListItem = (props: ListItemProps) => {
  return (
    <Link href={props.href}>
      <li className="cursor-pointer flex items-center py-2 text-white font-semibold text-lg justify-between cur">
        <div>{props.label}</div>
        <div>
          <ChevronRight size={18} />
        </div>
      </li>
    </Link>
  );
};

export default ListItem;
