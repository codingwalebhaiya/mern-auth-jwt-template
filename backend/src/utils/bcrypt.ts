import bcrypt from "bcrypt";

// hashed the password before the database
const hashValue = async (value: string, saltRounds?: number) => {
  await bcrypt.hash(value, saltRounds || 10);
};

// compare between password and hashedPassword
const compareValue = async (value: string, hashValue: string) => {
  await bcrypt.compare(value, hashValue).catch(() => false);
};

export { hashValue, compareValue };
