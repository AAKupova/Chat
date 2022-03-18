
import React from "react";

import "./index.scss";

export const EditAvatar = () => (
  <form>
   <input className="edit-avatar" type="file" name="avatar" accept="image/*" value='' />
  </form> 
)