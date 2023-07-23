import { PlusIcon } from "@radix-ui/react-icons";
import { Input, InputProps } from "@/components/ui/input";

export interface UploadProps extends InputProps {
  children: React.ReactNode;
}

const Upload = (props: UploadProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="border w-20 h-20 relative">
        <Input
          {...props}
          type="file"
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <PlusIcon className="w-full h-full" />
      </div>
      {props.children}
    </div>
  );
};
export default Upload;
