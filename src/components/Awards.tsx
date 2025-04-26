const Awards = () => {
  return (
    <div className="space-y-4">
      <div className="border-l-2 border-gray-200 pl-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="trophy">🏆</span>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">York Engineering Consulting Competition 2023</h4>
            <p className="text-gray-600">1st Place</p>
            <p className="text-gray-600 mt-1">Presented a cloud-migration strategy allowing the client to uninterruptedly and safely move data from in-house servers to the cloud.</p>
          </div>
        </div>
      </div>

      <div className="border-l-2 border-gray-200 pl-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="medal">🥈</span>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">UNHacks Hackathon 2021</h4>
            <p className="text-gray-600">2nd Place</p>
            <p className="text-gray-600 mt-1">Pitched a poster-media application to the university that minimizes the growing on-campus poster paper waste by 90%.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards 