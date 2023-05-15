import user from "../images/user.png";
function ContactCard({ contact }) {
  const { name, email } = contact;

  return (
    <div className="item">
      <img src={user} alt="user_avatar" className="ui image avatar" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="ui trash alternate outline icon"
        style={{ marginTop: "7px" }}
      />
    </div>
  );
}

export default ContactCard;
