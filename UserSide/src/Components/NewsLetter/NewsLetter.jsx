import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Suscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Address' />
                <button>Subscribe</button>
            </div>
           
        </div>
    )
}

export default NewsLetter