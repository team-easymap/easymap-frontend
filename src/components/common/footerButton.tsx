import IconComponent from "./icon";
import { Button, type ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

type FooterButtonProps = {
  icon: string;
  title: string;
  color ?: string;
} & ButtonProps;

const FooterButtonComponent: React.FC<FooterButtonProps> = ({
  icon,
  title,
  color,
  className,
  ...buttonProps
}) => {
  const iconColors = color === "purple" ? "#A65CF5" : "black"
  const textColorClass = color === "purple" ? "text-[#A65CF5]" : "text-black";

  return (
    <Button
      className={cn(
        "w-1/3 h-full bg-transparent flex flex-col justify-center items-center gap-1",
        textColorClass,
        className
      )}
      {...buttonProps}
    >
      <IconComponent name={icon} color={iconColors} />
      <span>{title}</span>
    </Button>
  );
};

export default FooterButtonComponent;
