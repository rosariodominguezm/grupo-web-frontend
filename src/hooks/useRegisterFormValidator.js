import { useState } from "react";

import {
  emailValidator,
  password2Validator,
  confirmPasswordValidator,
    origenValidator,
    nameValidator,
    usernameValidator,


} from "../components/Validators.js";

const touchErrors = errors => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

export const useRegisterFormValidator = form => {
  const [errors, setErrors] = useState({
    mail: {
      dirty: false,
      error: false,
      message: "",
    },
    password1: {
      dirty: false,
      error: false,
      message: "",
    },
    password2: {
        dirty: false,
        error: false,
        message: "",
      },
      nombre: {
        dirty: false,
        error: false,
        message: "",
      },
      origen: {
        dirty: false,
        error: false,
        message: "",
      },
      username: {
        dirty: false,
        error: false,
        message: "",
      },

  });

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // Create a deep copy of the errors
    const nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { mail, password1, password2, nombre, origen, username } = form;

    if (nextErrors.mail.dirty && (field ? field === "mail" : true)) {
      const mailMessage = emailValidator(mail, form);
      nextErrors.mail.error = !!mailMessage;
      nextErrors.mail.message = mailMessage;
      if (!!mailMessage) isValid = false;
    }

    if (nextErrors.password1.dirty && (field ? field === "password1" : true)) {
      const passwordMessage = password2Validator(password1, form);
      nextErrors.password1.error = !!passwordMessage;
      nextErrors.password1.message = passwordMessage;
      if (!!passwordMessage) isValid = false;
    }

    if (nextErrors.origen.dirty && (field ? field === "origen" : true)) {
        const origenMessage = origenValidator(origen, form);
        nextErrors.origen.error = !!origenMessage;
        nextErrors.origen.message = origenMessage;
        if (!!origenMessage) isValid = false;
      }

      if (nextErrors.nombre.dirty && (field ? field === "nombre" : true)) {
        const nombreMessage = nameValidator(nombre, form);
        nextErrors.nombre.error = !!nombreMessage;
        nextErrors.nombre.message = nombreMessage;
        if (!!nombreMessage) isValid = false;
      }

      if (nextErrors.username.dirty && (field ? field === "username" : true)) {
        const usernameMessage = usernameValidator(username, form);
        nextErrors.username.error = !!usernameMessage;
        nextErrors.username.message = usernameMessage;
        if (!!usernameMessage) isValid = false;
      }

    if (
        nextErrors.password2.dirty &&
        (field ? field === "password2" : true)
      ) {
        const confirmPasswordMessage = confirmPasswordValidator(
          password2,
          form
        );
        nextErrors.password2.error = !!confirmPasswordMessage;
        nextErrors.password2.message = confirmPasswordMessage;
        if (!!confirmPasswordMessage) isValid = false;
      }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = e => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};

 

 