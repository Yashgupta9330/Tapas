"use client";

import { db } from '@/app/Firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';


const ContactAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contactRef = collection(db, "contacts");

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactData = await getDocs(contactRef);
        setContacts(contactData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setError(error.message);
        setLoading(false);
      }
    };
    getContacts();
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "contacts", id);
      await deleteDoc(docRef);
      alert("Enquiry Deleted");
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      setError("Error deleting contact");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Admin</h2>
      {contacts.length === 0 ? (
        <div className="text-center text-gray-500">Database is empty</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map(contact => (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4" key={contact.id}>
              <h5 className="text-lg font-bold">{contact.name}</h5>
              <h6 className="text-md text-gray-600">{contact.email}</h6>
              <p className="mt-2"><strong>Subject:</strong> {contact.subject}</p>
              <p className="mt-2"><strong>Message:</strong> {contact.message}</p>
              <button
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactAdmin;
