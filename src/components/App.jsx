import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { getContactThunk, deleteContactThunk } from 'store/thunks';

import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactThunk());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);

  // console.log('contacts -> ', contacts);

  const handleDeleteContact = contactID => {
    dispatch(deleteContactThunk(contactID));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <ContactForm />
      </div>
      <div>
        {isLoading && <h3>...Loading</h3>}

        {contacts.length > 0 && (
          <ul>
            {contacts.map(({ id, name, phone }) => (
              <li key={id}>
                {name + ' ' + phone}
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteContact(id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <NotificationContainer />
    </div>
  );
};
