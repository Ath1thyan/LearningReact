import './css/Home.css'

function ErrorPage() {
    return (
        <div className="error-page">
            <img src="/media/errorimg.png" alt="ErrorPage" className="error-image"></img>
            <h1 className='error-title'>Error!</h1>
        </div>
    );
}

export default ErrorPage;