import React, {useState} from 'react'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'



const Navbar = () =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

        return(
            <div className="navbar w-100 p-0 m-0 navbar-expand-sm navbar-light ">

                <div className="w-100">

                    <div className="w-100 p-0 m-0 bg-light">
                        <div className="container">
                            <Link to="/" className="navbar-brand text-success "><h3>Dustlikdon.uz</h3></Link>

                            <div className="input-group w-50">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white"><a href="#"><img src="images/Frame.png" alt=""/></a></span>
                                </div>
                                <input type="text" placeholder="Saytdan qidirish" className="form-control"/>
                            </div>

                            <Dropdown className="bg-white" isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle className=" bg-white  btn-outline-success text-dark" caret>
                                    На русским
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Eng</DropdownItem>
                                    <DropdownItem>Français</DropdownItem>
                                    <DropdownItem>اللغة العربية</DropdownItem>
                                    <DropdownItem>中國人</DropdownItem>
                                    <DropdownItem>日本語</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            <a href="tel:998943650196" className="btn border-success btn-outline-warning "><img src="images/Frame2.png" alt=""/>+998 94 365-01-96</a>




                        </div>
                    </div>

                    <div className="w-100">
                        <div className="container mt-3">



                            <ul className="nav">
                                <div className=" rounded-lg bg-success">
                                    <a href="#" className="navbar-brand  "><img className="ml-2 w-100 p-0" src="images/Frame3.png" alt=""/></a>
                                </div>
                                <li className="nav-item"><a href="#" className="nav-link text-dark text-decoration-none ">Jamiyat haqida</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-dark text-decoration-none mr-2">Struktura</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-dark text-decoration-none mr-2">Yangiliklar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-dark text-decoration-none mr-2">Elektron murojaatlar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-dark text-decoration-none mr-2">Interaktiv xizmatalar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-dark text-decoration-none mr-2">Aloqa</a></li>
                            </ul>



                        </div>
                    </div>

                </div>





            </div>
        )
    };
export default Navbar