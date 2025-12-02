import { cn } from "@/lib/utils";

interface FrenchFlagProps {
  className?: string;
}

const FrenchFlag = ({ className }: FrenchFlagProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 900 600" 
      className={cn("inline-block align-middle shadow-sm rounded-[1px]", className)}
      style={{ width: '1.5em', height: '1em' }}
      aria-hidden="true"
      role="img"
    >
      <rect width="900" height="600" fill="#ED2939"/>
      <rect width="600" height="600" fill="#fff"/>
      <rect width="300" height="600" fill="#002395"/>
    </svg>
  );
};

export default FrenchFlag;

