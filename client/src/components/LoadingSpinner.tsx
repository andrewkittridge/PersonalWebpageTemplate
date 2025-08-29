import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  className?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  size = 'md',
  message = 'Loading...',
  className,
  fullScreen = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50'
    : 'flex items-center justify-center min-h-[200px]';

  return (
    <div
      className={cn(containerClasses, className)}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Enhanced spinner with motion */}
        <motion.div
          className={cn(
            'animate-spin rounded-full border-2 border-muted border-t-primary',
            sizeClasses[size]
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          aria-hidden="true"
        />

        {/* Loading message */}
        {message && (
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {message}
          </motion.p>
        )}

        {/* Screen reader text */}
        <span className="sr-only">{message}</span>
      </div>
    </div>
  );
}

// Skeleton loader for content
export function SkeletonLoader({ className, ...props }: { className?: string; [key: string]: any }) {
  return (
    <motion.div
      className={cn('animate-pulse bg-muted rounded', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-hidden="true"
      {...props}
    />
  );
}

// Page skeleton
export function PageSkeleton() {
  return (
    <div className="space-y-8">
      {/* Hero skeleton */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <SkeletonLoader className="h-16 w-3/4 mx-auto" />
            <SkeletonLoader className="h-8 w-1/2 mx-auto" />
            <SkeletonLoader className="h-6 w-2/3 mx-auto" />
          </div>
          <div className="flex justify-center gap-4">
            <SkeletonLoader className="h-12 w-32" />
            <SkeletonLoader className="h-12 w-32" />
          </div>
        </div>
      </div>

      {/* Content skeletons */}
      {[1, 2, 3].map((i) => (
        <section key={i} className="section-spacing">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <SkeletonLoader className="h-12 w-48 mx-auto" />
              <SkeletonLoader className="h-6 w-96 mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <SkeletonLoader className="h-4 w-full" />
                <SkeletonLoader className="h-4 w-5/6" />
                <SkeletonLoader className="h-4 w-4/5" />
                <SkeletonLoader className="h-4 w-full" />
              </div>
              <div className="space-y-4">
                <SkeletonLoader className="h-32 w-full rounded-lg" />
                <SkeletonLoader className="h-32 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
