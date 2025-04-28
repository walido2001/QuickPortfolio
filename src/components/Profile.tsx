const Profile = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">Notable Projects</h2>
      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="AI robot">🤖</span>
          <a 
            href="https://github.com/walido2001/ReviewLens" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            ReviewLens
          </a>
        </div>
        <p className="text-gray-600">A Product management tool with ChatGPT integration for automated review analysis, improving PM efficiency by 70%</p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="satellite">🛰️</span>
          <a 
            href="https://github.com/Satellite-Operations-Services-Optimizer/SOSO-Server" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            Satellite Operations Services Optimizer
          </a>
        </div>
        <p className="text-gray-600">An open-source project for the Canadian Space Agency, automating satellite-image-order scheduling with 80% improved upload speed</p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="anatomical heart">🫀</span>
          <a 
            href="https://github.com/walido2001/HeartRiskDetectionModel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            Heart Risk Detection ML Model
          </a>
        </div>
        <p className="text-gray-600">A machine learning model achieving 82% accuracy and 93% precision in heart disease prediction</p>
      </div>
    </div>
  )
}

export default Profile 