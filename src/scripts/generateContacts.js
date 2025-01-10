import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  contacts.push(...newContacts);
  await writeContacts(contacts);
  console.log(`${number} contacts added successfully.`);
};

generateContacts(5);
