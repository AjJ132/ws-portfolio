import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i}>
          <CardHeader className="space-y-4">
            <Skeleton className="aspect-video rounded-md" />
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-20 w-full" />
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-6 w-16" />
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-5" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}