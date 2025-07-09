export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skeleton for navbar */}
      <div className="h-16 bg-gray-100 animate-pulse"></div>
      
      <main className="py-10 md:py-32">
        <div className="mx-auto max-w-3xl px-4 py-10">
          {/* Breadcrumb skeleton */}
          <div className="h-4 bg-gray-200 rounded w-64 mb-8 animate-pulse"></div>
          
          {/* Title skeleton */}
          <div className="h-10 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-10 animate-pulse"></div>
          
          {/* Author skeleton */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
            </div>
          </div>
          
          {/* Image skeleton */}
          <div className="w-full h-96 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
          
          {/* Content skeleton */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-4">
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}