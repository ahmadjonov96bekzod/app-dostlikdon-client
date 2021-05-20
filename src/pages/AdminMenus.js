import React from 'react'
import AdminLayout from '../components/AdminLayout'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {connect} from 'react-redux'
import {updateState, saveMenu, getAllMenus} from "../redux/actions/menusAction";
import {AvForm, AvField} from 'availity-reactstrap-validation'


const AdminMenus = (props) =>{
    return(
        <AdminLayout>

          <div className="d-flex justify-content-between align-items-center">

              <h5>Menus Page</h5>
              <button type="button" className="btn btn-success" onClick={() => props.updateState({modalOpen:true})}>Add</button>
          </div>

            <Modal isOpen={props.modalOpen}>

                <ModalHeader>

                </ModalHeader>

                <AvForm >
                <ModalBody>

                    <AvField name="nameUz" label="Ismi" type="text" />
                    <AvField name="nameRu" label="Имя" type="text" />
                    <AvField name="namaEn" label="Name" type="text" />
                    <AvField name="url" label="Url" type="text"/>
                    <AvField name="subMenu" label="SubMenu mi ?"  type="checkbox"/>
                    <AvField name="parentId" label="Id" type="text"/>
                    <AvField type="select" name="paretId" label="Menular ro'yhati" >
                        <option>Jamiyat xaqida</option>
                        <option>Struktura</option>
                        <option>Yangiliklar</option>
                        <option>Electron murojaat</option>
                        <option>Interaktiv xizmatlar</option>
                        <option>Aloqa</option>
                    </AvField>

                </ModalBody>


                <ModalFooter>
                    <button type="button" className=" btn btn-secondary">Close</button>
                    <button type="submit" className=" btn btn-success">Add</button>
                </ModalFooter>

                </AvForm>

            </Modal>

        </AdminLayout>
    )
}

const mapStateToProps = (state) =>{
    return{
        modalOpen:state.menus.modalOpen
    }
}

export default connect(mapStateToProps, {updateState, saveMenu, getAllMenus}) (AdminMenus)
