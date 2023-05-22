import user from "../images/user.png";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

function ContactCard({ contact }) {
  const { removeContactHandler } = useContactsCrud();
  const { name, email, id } = contact;

  const deleteContact = (id) => {
    removeContactHandler(id);
  };
  return (
    <div className="item">
      <img src={user} alt="user_avatar" className="ui image avatar" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="ui trash alternate outline icon"
        style={{ marginTop: "7px" }}
        onClick={() => deleteContact(id)}
      />
      <Link to="/edit" state={{ contact: contact }}>
        <i
          className="ui edit alternate outline icon"
          style={{ marginTop: "7px", marginRight: "20px", color: "blue" }}
        />
      </Link>
    </div>
  );
}

export default ContactCard;
