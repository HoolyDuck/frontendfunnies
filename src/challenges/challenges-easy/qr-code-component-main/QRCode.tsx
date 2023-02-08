import image from './images/image-qr-code.png'
import './QRCode.css'

function QRCodeComponent() {
    return (
        <div className="qr-code__page"> 
            <div className="qr-code__container">
                <img className='qr-code__image' src={image}></img>
                <h2 className='qr-code__header'>
                    Improve your front-end skills by building projects
                </h2>
                <p className='qr-code__text'>  
                    Scan the QR code to visit Frontend Mentor and take
                     your coding skills to the next level
                </p>
            </div>
        </div>
    )
}

export default QRCodeComponent