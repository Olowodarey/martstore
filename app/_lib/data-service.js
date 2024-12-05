import { supabase } from "./supabase";

// Fetch a single phone by ID
export async function getPhones(id) {
  const { data, error } = await supabase
    .from('phone')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

// Fetch phone prices by ID
export async function getPhonePrice(id) {
  const { data, error } = await supabase
    .from('phone')
    .select('regularPrice, discount')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

// Fetch all phones with details
export const getPhone = async function () {
  const { data, error } = await supabase
    .from('phone')
    .select('id, name, regularPrice, discount, discription, image')
    .order('name');

  if (error) {
    console.error(error);
    throw new Error('phones  could not be loaded');
  }

  return data;
};
