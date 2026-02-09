import { cn } from "@/lib/utils";

interface BackgroundBlobsProps {
  className?: string;
  colors?: {
    first?: string;
    second?: string;
    third?: string;
  };
}

export function BackgroundBlobs({ className, colors }: BackgroundBlobsProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob",
          colors?.first || "bg-purple-300",
        )}
      />
      <div
        className={cn(
          "absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000",
          colors?.second || "bg-blue-300",
        )}
      />
      <div
        className={cn(
          "absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000",
          colors?.third || "bg-indigo-300",
        )}
      />
    </div>
  );
}
