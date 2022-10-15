import React, { useState } from 'react'
import Modal from './Modal'

const Row = ({ _id, Company_Name, Contact_Person, Email_Address, Facilitator, Phone_No, Sites, Tenant_Groups, Tenants, logo }) => {
    const [showModal, SetShowModal] = useState()
    window.addEventListener('click', (event) => {
        if (event.target.className !== 'btn-layer') {
            SetShowModal(false)
        }
    })
    return (
        <tr>
            <td>
                <div className="user-td">
                    <img className='user-td-img' src={logo} alt="" />
                    <span>{Company_Name}</span>
                </div>
            </td>
            <td><div className="content">{Email_Address}</div></td>
            <td>{Phone_No}</td>
            <td>{Contact_Person}</td>
            <td>{Facilitator}</td>
            <td>{Sites}</td>
            <td>{Tenants}</td>
            <td>{Tenant_Groups}</td>
            <td>
                <div className="oparetion">
                    <button className="op-btn" id={`Op_${_id}`} >
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.77778 3.55556C2.12939 3.55556 2.4731 3.45129 2.76546 3.25595C3.05781 3.0606 3.28568 2.78295 3.42023 2.4581C3.55479 2.13326 3.58999 1.77581 3.5214 1.43095C3.4528 1.0861 3.28348 0.769326 3.03486 0.5207C2.78623 0.272073 2.46946 0.102756 2.12461 0.0341603C1.77975 -0.0344356 1.4223 0.000770277 1.09745 0.135326C0.772606 0.269882 0.494955 0.497744 0.299611 0.790098C0.104266 1.08245 9.58035e-07 1.42617 9.58035e-07 1.77778C9.58035e-07 2.24927 0.187302 2.70146 0.5207 3.03486C0.854098 3.36825 1.30628 3.55556 1.77778 3.55556ZM1.77778 12.4444C1.42617 12.4444 1.08245 12.5487 0.790098 12.7441C0.497744 12.9394 0.269882 13.217 0.135326 13.5419C0.000770277 13.8667 -0.0344356 14.2242 0.0341603 14.569C0.102756 14.9139 0.272074 15.2307 0.5207 15.4793C0.769327 15.7279 1.0861 15.8972 1.43095 15.9658C1.77581 16.0344 2.13326 15.9992 2.4581 15.8647C2.78295 15.7301 3.0606 15.5023 3.25595 15.2099C3.45129 14.9175 3.55556 14.5738 3.55556 14.2222C3.55556 13.7507 3.36825 13.2985 3.03486 12.9651C2.70146 12.6317 2.24927 12.4444 1.77778 12.4444ZM1.77778 6.22222C1.42617 6.22222 1.08245 6.32649 0.790098 6.52183C0.497744 6.71718 0.269882 6.99483 0.135326 7.31967C0.000770277 7.64452 -0.0344356 8.00197 0.0341603 8.34683C0.102756 8.69168 0.272074 9.00845 0.5207 9.25708C0.769327 9.5057 1.0861 9.67502 1.43095 9.74362C1.77581 9.81221 2.13326 9.77701 2.4581 9.64245C2.78295 9.5079 3.0606 9.28003 3.25595 8.98768C3.45129 8.69533 3.55556 8.35161 3.55556 8C3.55556 7.5285 3.36825 7.07632 3.03486 6.74292C2.70146 6.40952 2.24927 6.22222 1.77778 6.22222Z" fill="#686687" />
                        </svg>
                    </button>
                    <div className="btn-layer" onClick={() => SetShowModal(true)}>
                        {showModal ? <Modal /> : ''}
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default Row