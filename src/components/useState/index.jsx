import { useState } from "react";

function TongTien() {
    const [soLuong, setSoLuong] = useState(1);

    const handleCong = () => {
        setSoLuong(prev => prev + 1);
    };

    const handleTru = () => {
        setSoLuong(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handleChange = (e) => {
        setSoLuong(parseInt(e.target.value));
    };

    const gia = 100000;
    const tongTien = soLuong * gia;

    return (
        <>
            <div>
                <button onClick={handleCong}>+</button>
                <input
                    type="number"
                    value={soLuong}
                    onChange={handleChange}
                />
                <button onClick={handleTru}>-</button>
            </div>
            <h2>Tổng tiền: {tongTien}</h2>
        </>
    );
}

export default TongTien;