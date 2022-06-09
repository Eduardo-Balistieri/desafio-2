class Validation {
  static storeRegistration(name, owner, registrationDate, businessType) {
    if (!name || !owner || !registrationDate || !businessType) {
      throw Error("Missing store registration data")
    }
    //trim -> remove espaços em branco no começo e fim
    const _name = name.trim()
    const _owner = owner.trim()
    const _registrationDate = registrationDate.trim()
    const _businessType = businessType.trim()
    if (
      _name.length === 0 || name.length > 100 ||
      _owner.length === 0 || owner.length > 100 ||
      _registrationDate.length === 0 ||
      _businessType.length === 0 || businessType.length > 100
    ) {
      throw Error("Some argument is invalid")
    }
  }
}

export default Validation