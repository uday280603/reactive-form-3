export class CustomRegex {
  static password = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$`//Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and minimum 8 characters.
  static onlyText = '[a-zA-Z ]*'
  static onlyTextWithSpace ='[a-zA-Z ]*'
  static onlyNums = '^[0-9]+$';
  static username = '^[a-zA-Z ]*$'
  static email = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,100}$'
  static updateEmail =
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,9}))$/'
}