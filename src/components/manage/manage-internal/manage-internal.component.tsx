import * as React from 'react';
import { Table } from 'reactstrap';
import { ICognitoUser } from '../../../model/cognito-user.model';
import ViewUserModal from '../view-user-modal/view-user-modal.container';
import { IUser } from '../../../model/user.model';


export interface IManageInternalComponentProps {
  manageUsers: ICognitoUser[];
  hoveredUser: IUser;
  toggleViewUserModal: () => void;
}

export class ManageInternalComponenet extends React.Component<IManageInternalComponentProps, any> {

  constructor(props) {
    super(props);
  }
  

  render() {
    return (
        <Table striped id="manage-users-table">
        <ViewUserModal/>
          <thead className="rev-background-color">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              /**
               * onMouseEnter should set the hoveredUser in
               * some state this component is subscribed to
               * to be some user,
               * 
               * then the modal can reuse that same user in its state
               * and it all be goouchi
               */
              this.props.manageUsers.map((user) =>
                <tr key={user.email} className="rev-table-row" onClick={this.props.toggleViewUserModal} onMouseEnter={this.props.hoveredUser}>
                  <td></td>
                  <td></td>
                  <td>{user.email}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
        
    )
  }
}