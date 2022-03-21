
import React from "react";

import "./styled.ts";

export const EditAvatar = () => (
  <form>
   <input className="edit-avatar" type="file" name="avatar" accept="image/*" value='' />
  </form> 
)