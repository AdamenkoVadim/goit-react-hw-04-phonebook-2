import css from "components/ContactItem/ContactItem.module.css"
export const ContactItem = ({ name, number, id, deleteContact }) => {
    return (
      <>
        <li className={css.contactItem}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.bthListItem}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      </>
    );
  };