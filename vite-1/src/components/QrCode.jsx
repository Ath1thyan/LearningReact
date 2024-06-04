import { useState } from "react"

function QrCode() {

    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("");
    const [qrSize, setQrSize] = useState("");

    async function generateQR() {
        setLoading(true);
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }
        catch(err){
            console.log("Wrror generating QR", err)
        }
        finally{
            setLoading(false);
        }
    }

    function downloadQR() {
        fetch(img).then((res)=>res.blob()).then((blob)=>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qr-code.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error) => {
            console.log("Error downloading QR", error)
        })
    }

    return (
        <div className="app-container">
        <h1>QR Code Generator</h1>
        {loading && <p>Loading...</p>}
        {img && <img src={img} className="qr-image" />}
            <div>
                <label htmlFor="dataInput" className="input-label">
                    QR Code Data:
                </label>
                <input type="text" value={qrData} id="dataInput" className="input-field" placeholder="Enter Data for QR Code" onChange={(e) => setQrData(e.target.value)} />
                <label htmlFor="sizeInput" className="input-label">
                    Image size (ex., 150):
                </label>
                <input type="text" value={qrSize} id="sizeInput" className="input-field" placeholder="Enter Image Size" onChange={(e) => setQrSize(e.target.value)} />
                <button className="gen-btn" disabled={loading} onClick={generateQR}>Generate</button>
                <button className="down-btn" onClick={downloadQR}>Download</button>
            </div>
        </div>
    )
}

export default QrCode
