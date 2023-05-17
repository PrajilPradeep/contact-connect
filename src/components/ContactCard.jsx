import user from "../images/user.png";
function ContactCard({ contact, deleteContact }) {
  const { name, email, id } = contact;

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
        onClick={() => deleteContact(id)}
      />
    </div>
  );
}

export default ContactCard;
