function Withdraw({ balance, form, onInputChange, withdraw }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Withdraw</h5>
                <div>Balance: ${balance.toFixed(2)}</div>
                <form onSubmit={withdraw}>
                    <div className="form-group">
                        <label htmlFor="withdrawAmount">Withdraw Amount</label>
                        <input type="number" className="form-control" id="withdrawAmount" name="withdrawAmount" value={form.withdrawAmount} onChange={onInputChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!form.withdrawAmount}>Withdraw</button>
                </form>
            </div>
        </div>
    );
}