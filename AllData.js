function AllData({ allData }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">All Data</h5>
                {allData.length > 0 ? (
                    <ul>
                        {allData.map((data, index) => (
                            <li key={index}>
                                {data.action}: {data.amount 
                                    ? `$${data.amount}` 
                                    : `Date-[${data.date}], Time-[${data.time}], Name-[${data.name}], E-mail-[${data.email}]`}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>No data available</div>
                )}
            </div>
        </div>
    );
}