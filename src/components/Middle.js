
import React from 'react'
import Medication from '../medication.jpg'
import Stray from '../stray.jpg'
import Tutor from '../tutor.jpg'
import Ngo from '../ngo2.jpg'
import Kitchen from '../kitechen.jpg'
import Human from '../humans.jpg'
import Kitch from '../kitch.jpg'

function Middle() {
    return (

        <>

            <div className='container'>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
            {/* <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                <div id="myDropdown" class="dropdown-content">
                    <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
                    <a href="#about">About</a>
                    <a href="#base">Base</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                    <a href="#custom">Custom</a>
                    <a href="#support">Support</a>
                    <a href="#tools">Tools</a>
                </div>
            </div> */}
            <div className='cardimg'>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Medication} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Medication</h5>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Stray} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Stray Animals</h5>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Tutor} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Learn a Skill</h5>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Ngo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">NGOs</h5>
                    </div>
                </div>
            </div>
            <div className='cardimg'>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Kitch} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Community Kitchen</h5>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Human} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Human Shelter</h5>
                    </div>
                </div>
                {/* 
            <div className="card" style={{"width" : "18rem"}}>
                <img src={Tutor} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Learn a Skill</h5>
                </div>
            </div>
            <div className="card" style={{"width" : "18rem"}}>
                <img src={Ngo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">NGOs</h5>
                </div>
            </div>   */}
            </div>
        </>
    )
}

export default Middle
