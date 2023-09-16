import { supaBaseclient } from "../../utilities/supabaseclient";

export const getUserData = async () => {
  const response = await supaBaseclient.from('journey').select(`*,journey_comments(comment, author(name, surname))`);
  if (response.data) {
    console.log(response.data)
    return response.data;
  }
  return null;
};
