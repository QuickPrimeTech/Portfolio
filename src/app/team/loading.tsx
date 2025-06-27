import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white space-y-20">
      {/* Hero Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <Skeleton className="h-12 w-3/4 mx-auto rounded" />
            <Skeleton className="h-6 w-5/6 mx-auto rounded" />
          </div>
        </div>
      </section>

      {/* Team Skeleton */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-1/3 mx-auto rounded mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border rounded shadow p-6 space-y-4"
              aria-hidden="true"
            >
              <Skeleton className="w-full aspect-square rounded" />
              <Skeleton className="h-6 w-3/4 rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <div className="flex flex-wrap gap-2 mt-2">
                {[...Array(3)].map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-1/4 mx-auto rounded mb-4" />
            <Skeleton className="h-6 w-1/3 mx-auto rounded" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border rounded shadow p-8 text-center space-y-4"
                aria-hidden="true"
              >
                <Skeleton className="mx-auto h-16 w-16 rounded-full" />
                <Skeleton className="h-6 w-1/2 mx-auto rounded" />
                <Skeleton className="h-4 w-3/4 mx-auto rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Skeleton */}
      <section className="py-20 bg-secondary bg-opacity-10 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-xl">
          <Skeleton className="h-10 w-3/4 mx-auto rounded" />
          <Skeleton className="h-6 w-full mx-auto rounded" />
          <div className="mx-auto flex justify-center gap-4 mt-6">
            <Skeleton className="h-12 w-40 rounded" />
          </div>
        </div>
      </section>
    </div>
  );
}
