function CreateAccount({ form, onInputChange, createAccount }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Create Account</h5>
                <form onSubmit={createAccount}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={onInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={onInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={onInputChange} minLength="8" required />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!form.name || !form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.password.length < 8}>Create Account</button>
                    <small className="form-text text-muted mt-2">
                        {(!form.name || !form.email || form.password.length < 8 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) && (
                            <span>
                                {form.name === '' && 'Name is required. '}
                                {form.email === '' && 'Email is required. '}
                                {form.email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && 'Please enter a valid email address. '}
                                {form.password.length < 8 && 'Password must be at least 8 characters long.'}
                            </span>
                        )}
                    </small>
                </form>
            </div>
        </div>
    );
}