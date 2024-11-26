const cheapFlightsData = [
  { from: "New York", to: "London" },
  { from: "New York", to: "Paris" },
  { from: "London", to: "Paris" },
  { from: "New York", to: "Rome" },
  { from: "Montreal", to: "Paris" },
  { from: "London", to: "Milan" },
  { from: "Toronto", to: "London" },
  { from: "New York", to: "Milan" },
  { from: "London", to: "Dubai" },
  { from: "London", to: "Tokyo" },
  { from: "Madrid", to: "Rome" },
  { from: "London", to: "Delhi" },
  { from: "New York", to: "Los Angeles" },
  { from: "Paris", to: "Marrakech" },
  { from: "Sao Paulo", to: "London" },
  { from: "London", to: "Istanbul" },
  { from: "Paris", to: "Bangkok" },
  { from: "New York", to: "Orlando" },
  { from: "London", to: "Berlin" },
  { from: "Chicago", to: "Paris" },
  { from: "Melbourne", to: "London" },
]

const FindCheapFlight = () => {
  return (
    <div className="my-14">
      <h5 className="text-xl font-medium">
        Find cheap flights on popular routes
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 mt-4">
        {cheapFlightsData.map((data, key) => {
          return (
            <div key={key}>
              <a href="" className="font-roboto text-sm text-[#1A73E8]">
                Flights from {data.from} to {data.to}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FindCheapFlight;