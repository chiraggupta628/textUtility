import React from 'react'

export default function AboutUs(props) {
    return (
        <>
            <h1 className="my-3 text-center" style={{ color: props.mode === "light" ? "black" : "white", }}>Abouts Us</h1>
            <div class="container my-4">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="/img1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sally Preston (CEO)</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="img2.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Justine Williamson (CTO)</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card" style={{width: "18rem"}}>
                            <img src="img3.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Vania Gross (CFO)</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
