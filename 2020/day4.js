const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
const hexRegex = new RegExp(/^#[0-9a-f]{6}$/);
const passportNo = new RegExp(/^\d{9}$/);

module.exports.part1 = function (input) {
  let valid = 0;

  for (const i of input) {
    let hasFields = false;

    for (const reqField of requiredFields) {
      if (!i.includes(reqField)) {
        hasFields = false;
        break;
      } else {
        hasFields = true;
      }
    }

    if (hasFields) {
      valid++;
    }
  }

  return valid;
};

module.exports.part2 = function (input) {
  input = input.filter((i) => {
    let hasFields = false;

    for (const reqField of requiredFields) {
      if (!i.includes(reqField)) {
        hasFields = false;
        break;
      } else {
        hasFields = true;
      }
    }

    return hasFields;
  });

  let valid = 0;

  for (const i of input) {
    const passProps = i.split(' ');
    let propsValid = true;

    for (const prop of passProps) {
      const [key, value] = prop.split(':');

      if ((key === 'byr' && !(Number(value) >= 1920 && Number(value) <= 2002)
          || (key === 'iyr' && !(Number(value) >= 2010 && Number(value) <= 2020))
          || (key === 'eyr' && !(Number(value) >= 2020 && Number(value) <= 2030)))) {
        propsValid = false;
        break;
      } else if (key === 'hgt') {
        if (value.includes('cm')) {
          const subVal = value.split('cm')[0];

          if (!(Number(subVal) >= 150 && Number(subVal) <= 193)) {
            propsValid = false;
            break;
          }
        } else if (value.includes('in')) {
          const subVal = value.split('in')[0];

          if (!(Number(subVal) >= 59 && Number(subVal) <= 76)) {
            propsValid = false;
            break;
          }
        } else {
          propsValid = false;
          break;
        }
      } else if (key === 'hcl' && !hexRegex.test(value)) {
        propsValid = false;
        break;
      } else if (key === 'ecl' && !eyeColors.includes(value)) {
        propsValid = false;
        break;
      } else if (key === 'pid' && !passportNo.test(value)) {
        propsValid = false;
        break;
      }
    }

    if (propsValid) {
      valid++;
    }
  }

  return valid;
};
