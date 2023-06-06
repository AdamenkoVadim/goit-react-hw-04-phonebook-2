import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={nanoid()}
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};