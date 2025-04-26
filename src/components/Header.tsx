const Header = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="px-8 py-12 animate-slide-in-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/profile-photo.jpg"
              alt="Walid AlDari"
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-xl animate-slide-in-left"
            />
            <div className="animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              <h1 className="text-4xl font-bold">Walid AlDari</h1>
              <h2 className="text-xl text-gray-400 mt-2">Software Engineer</h2>
              <div className="mt-4 text-gray-400">
                <p>Bachelor of Engineering, Software Engineering with a focus on Big Data</p>
                <p>York University • GPA: 3.6/4.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header 