import { CollectionProps } from "./CollectionCards";
import { Trash2Icon } from "lucide-react";

const DeleteButton = (props: { data: CollectionProps }) => {
  const { data } = props;
  return (
    <div className="p-[2px] flex justify-center items-center gap-1 deleteBtn-bg text-black rounded-sm">
      <Trash2Icon className="w-4 h-4" />
      <div>Delete</div>
    </div>
  );
};

export default DeleteButton;
