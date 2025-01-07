export default function Awards() {
  return (
    <div>
      <p className="text-4xl font-extrabold pb-4">
        Awards
      </p>
      <p className="pb-2">
        The three highest scoring entries will be provided monetary awards in the following amounts to aid the pursuit of their research interest.
      </p>
      <div className="flex md:flex-row flex-col md:justify-around pt-4 md:space-x-16 space-y-8 md:space-y-0 items-center">
        <div className="text-purple border-3 border-lightPurple w-full rounded-xl p-4">
          <p className="text-center text-xl font-extrabold">$250</p>
          <p className="text-center">Overall First Place</p>
        </div>
        <div className="text-purple w-full border-3 border-lightPurple w-56 rounded-xl p-4">
            <p className="text-center text-xl font-extrabold">$150</p>
            <p className="text-center">Overall Second Place</p>
        </div>
        <div className="text-purple w-full border-3 border-lightPurple w-56 rounded-xl p-4">
            <p className="text-center text-xl font-extrabold">$50</p>
            <p className="text-center">Overall Third Place</p>
        </div>
      </div>
    </div>
  )
}
