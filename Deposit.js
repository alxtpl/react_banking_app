function Deposit({ balance, form, onInputChange, deposit }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Deposit</h5>
                <div>Balance: ${balance.toFixed(2)}</div>
                <form onSubmit={deposit}>
                    <div className="form-group">
                        <label htmlFor="depositAmount">Deposit Amount</label>
                        <input type="number" className="form-control" id="depositAmount" name="depositAmount" value={form.depositAmount} onChange={onInputChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!form.depositAmount}>Deposit</button>
                </form>
            </div>
        </div>
    );
}