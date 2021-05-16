
import React, {useState}  from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import MediaCards from '../components/MediaCards'
import '../sass/media-style.scss'



const Media = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (


        <div className="medias container " >
            <div className="row mt-5 mb-2">
                <div className="col-12">
                    <h2>Media</h2>
                </div>
            </div>

            <Nav tabs className="border-0 nav">
                <NavItem  className="border-0 nav-item">
                    <NavLink
                        className="border-0 nav-link btn-outline-success rounded-pill  {classnames({active: activeTab === '1'})}"
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                       Barchasi
                    </NavLink>
                </NavItem>
                <NavItem  className="border-0">
                    <NavLink
                        className=" border-0 nav-link btn-outline-success rounded-pill  {classnames({active: activeTab === '2'})}"
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        Foto galereya
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className="  nav-link border-0 btn-outline-success rounded-pill {classnames({active: activeTab === '3'})}"
                        onClick={() => {
                            toggle('3');
                        }}
                    >
                        Video galereya
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className="border-0">
                    <Row className="border-0">

                            <MediaCards   src="images/image 17.png"
                            title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>

                            <MediaCards   src="images/image 18.png"
                            title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>

                            <MediaCards   src="images/Rectangle 18.png"
                            title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>

                    </Row>
                </TabPane>
                <TabPane tabId="2" className="border-0">
                    <Row  className="border-0">
                        <MediaCards   src="images/image 18.png"
                                      title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>
                        <MediaCards   src="images/Rectangle 18.png"
                                      title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>
                        <MediaCards   src="images/image 17.png"
                                      title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>

                    </Row>
                </TabPane>
                <TabPane tabId="3" className="border-0">
                    <Row className="border-0">

                        <MediaCards   src="images/Rectangle 18.png"
                                      title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>

                        <MediaCards   src="images/image 18.png"
                                      title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>

                        <MediaCards   src="images/image 17.png"
                                      title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>

                    </Row>
                </TabPane>
            </TabContent>
        </div>


























    )
}


    //
    //
    //     {/*<div className="container mt-5">*/}
    //         {/*<div className="row">*/}
    //             {/*<div className="col-12">*/}
    //                 {/*<h2>Media</h2>*/}
    //
    //
    //             {/*</div>*/}
    //         {/*</div>*/}
    //         {/*<div className="row mt-3">*/}
    //
    //             {/*<ul className="nav flex-nowrap overflow-mobile" >*/}
    //                 {/*<li className="nav-item"><a href="#all" data-toggle="tab" className="nav-link text-center active" >Barchasi</a></li>*/}
    //                 {/*<li className="nav-item"><a href=" #photo" data-toggle="tab" className="nav-link text-center " >Foto</a></li>*/}
    //                 {/*<li className="nav-item"><a href=" #video" data-toggle="tab" className="nav-link text-center " >Video</a></li>*/}
    //             {/*</ul>*/}
    //
    //             {/*<div className="tab-content mt-3">*/}
    //
    //                 {/*<div className="tab-pane active " id="all">*/}
    //
    //                     {/*<div className="row">*/}
    //
    //                     {/*<MediaCards   src="images/image 17.png"*/}
    //                              {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //                     {/*<MediaCards   src="images/image 18.png"*/}
    //                              {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //                     {/*<MediaCards   src="images/Rectangle 18.png"*/}
    //                              {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //                     {/*</div>*/}
    //
    //                 {/*</div>*/}
    //
    //                 {/*<div className="tab-pane" id="photo">*/}
    //                     {/*<div className="row">*/}
    //
    //                         {/*<MediaCards   src="images/image 18.png"*/}
    //                                  {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //                         {/*<MediaCards   src="images/Rectangle 18.png"*/}
    //                                  {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //                         {/*<MediaCards   src="images/image 17.png"*/}
    //                                  {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //
    //                     {/*</div>*/}
    //
    //                 {/*</div>*/}
    //
    //                 {/*<div className="tab-pane" id="video" >*/}
    //
    //                     {/*<MediaCards   src="images/image 17.png"*/}
    //                              {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //                     {/*<MediaCards   src="images/image 18.png"*/}
    //                              {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //                     {/*<MediaCards   src="images/Rectangle 18.png"*/}
    //                              {/*title="'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi'"/>*/}
    //
    //
    //                 {/*</div>*/}
    //
    //
    //             {/*</div>*/}
    //
    //         {/*</div>*/}
    //     {/*</div>*/}
    // )
// }
export default Media


