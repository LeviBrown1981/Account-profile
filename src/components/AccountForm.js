import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";


class AccountForm extends React.Component {
  state = { username: "", membershipLevel: "", email: "", avatar: "", 
  membershipLevel: this.props.membershipLevel,
  email: this.props.email,
  avatar: this.props.avatar, 
  };

  handleChange = ( e, { name, value, }) => {
    // email: value, avatar: value,
  this.setState({
    [name]: value,
    // [email]: value,
    // [avatar]: value,
  });
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
    const account = { ...this.state, };
    this.account.updateAccount(account);
  };

  render() {
    const { username, membershipLevel, } = this.state;
    // email, avatar,
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="New Username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
            <Form.Select
              label="Membership Level"
              name="membershipLevel"
              value={membershipLevel}
              onChange={this.handleChange}
              options={membershipOptions}
            />
            <Form.Button color="violet">Confirm</Form.Button>
            </Form>      
            {/* <Form.Input
            label="New Email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            />
            <Form.Input
            label="New Avatar"
            type="img"
            name="avatar"
            value={avatar}
            onChange={this.handleChange} */}
            /> 
      </>
    )
  };
};


const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      {
         value => (
           <AccountForm
           { ...props }
           Username={value.username}
           membershipLevel={value.membershipLevel}
           UpdateAccount={value.updateAccount}
           />
         )}
    </AccountConsumer>
  );
};

const membershipOptions = [
{ key: "b", text: "Bronze", value: "Bronze", },
{ key: "s", text: "Silver", value: "Silver, "},
{ key: "g", text: "Gold", value: "Gold", },
{ key: "p", text: "Platinum", value: "Platinum", },
];


export default AccountForm;