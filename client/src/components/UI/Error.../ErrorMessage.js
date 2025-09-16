
export const ErrorMessage = ({ message }) => {

    return (
        <div className="">
            <p>{message}</p>
            <button
            onClick={() => window.location.reload()}
            >
                Prøv igen
            </button>
        </div>
    );
};