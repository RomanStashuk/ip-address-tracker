class Validators {
  static required(value = '') {
    return value && value.trim();
  }

  static isIP(value = '') {
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      value
    );
  }
}

export default Validators;
