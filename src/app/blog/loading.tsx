export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skeleton for navbar */}
      <div className="h-16 bg-gray-100 animate-pulse"></div>
      
      <main className="bg-white pb-20 flex flex-col items-center">
        <div className="blog-grid flex flex-col items-center px-2 py-2 max-w-6xl pt-20">
          {/* Skeleton for hero article */}
          <div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse mb-8"></div>
          
          {/* Skeleton for article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}