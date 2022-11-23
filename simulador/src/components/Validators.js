
export const emailValidator = mail => {
    if (!mail) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(mail)) {
      return "Incorrect email format";
    }
    return "";
  };
  
  export const passwordValidator = password => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must have a minimum 6 characters";
    }
    return "";
  };

  export const password2Validator = password => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must have a minimum 6 characters";
    } else if (!new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])").test(password)) {
        return "Password must have at least one lowercase letter, one uppercase letter and one number";
      }
    return "";
  };


  export const confirmPasswordValidator = (confirmPassword, form) => {
    if (!confirmPassword) {
      return "Confirm password is required";
    } else if (confirmPassword.length < 6) {
      return "Confirm password must have a minimum 6 characters";
    } else if (confirmPassword !== form.password1) {
      return "Passwords do not match";
    }
    return "";
  };

  export const origenValidator = (origen) => {
    if (!origen) {
      return "Origen is required";
  };};

  export const usernameValidator = (username) => {
    if (!username) {
      return "Username is required";
  };};

  export const nameValidator = (name) => {
    if (!name) {
      return "Name is required";
  };};