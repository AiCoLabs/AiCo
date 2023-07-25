import * as React from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface UploadProps extends InputProps {
  children?: React.ReactNode;
}

const Upload = React.forwardRef<HTMLTextAreaElement, UploadProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex flex-row items-center">
        <div className="border w-20 h-20 relative">
          <Input
            type="file"
            className={cn(
              "absolute w-full h-full opacity-0 cursor-pointer",
              className
            )}
            ref={ref}
            {...props}
          />
          <PlusIcon className="w-full h-full" />
        </div>
        {props.children}
      </div>
    );
  }
);
Upload.displayName = "Upload";
export default Upload;
