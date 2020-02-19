export const signupErrors = {
  undefinedFirstName: 'First Name is required',
  undefinedLastName: 'Last Name is required',
  invalidFirstName: 'Input first name with only alphabets',
  invalidLastName: 'Input last name with only alphabets',
  undefinedEmail: 'Email is required',
  undefinedPhone: 'Phone number is required',
  undefinedPassword: 'Password is required',
  invalidPhone: 'Input phone number with only digits',
  invalidPassword: 'Password cannot be less than 8 characters',
  invalidEmail: 'Enter a valid email address',
  nonAndelanEmail: 'Email should be an andela email',
  existingUser: 'User already exist',
  alphaNumericPassword:
    'Password should contain at least one special character, one digit and one letter',
  phoneLength: 'Phone number should be 11 digits'
};

export const signupVerifyErrors = {
  notFound: 'No pending verification found'
};

export const authorizationErrors = {
  undefinedToken: 'Please make sure your request has an authorization header',
  invalidToken: 'Authorization Denied.'
};



export default signupErrors;
