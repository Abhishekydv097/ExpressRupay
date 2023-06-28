import faker from 'faker';

const generateDummyLead = () => {
  const fullName = faker.name.findName();
  const location = faker.address.city();
  const priority = faker.random.arrayElement(['High', 'Medium', 'Low']);
  const sourcedThrough = faker.random.arrayElement(['Website', 'Referral', 'Email']);
  const createdBy = faker.internet.userName();

  return {
    fullName,
    location,
    priority,
    sourcedThrough,
    createdBy,
  };
};


const generateDummyLeads = (count) => {
  const leads = [];
  for (let i = 0; i < count; i++) {
    const lead = generateDummyLead();
    leads.push(lead);
  }
  return leads;
};

export default generateDummyLeads;
