'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="error-container">
            <h2>Error</h2>
            <p>{error.message}</p>
            <button className="btn btn-primary" onClick={() => reset()}>
                Reintentar
            </button>
        </div>
    );
}
