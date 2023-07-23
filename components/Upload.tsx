import { PlusIcon } from "@radix-ui/react-icons";
import { Input, InputProps } from "@/components/ui/input";

export interface UploadProps extends InputProps {}

const Upload = (props: UploadProps) => {
  return (
    <div className="border w-20 h-20 relative">
      <Input {...props} type="file" className="absolute w-full h-full opacity-0 cursor-pointer" />
      <PlusIcon className="w-full h-full" />
    </div>
  );
};
export default Upload;
